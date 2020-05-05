require('dotenv').config();
const gitRequester = require('simple-git/promise');

const setupGit = async (basePath) => {
  const git = gitRequester(basePath);

  await git.addConfig('credential.helper', 'store');

  // TODO: Check how to log in into github


  // add name, email and all the config to push a signed commit
  await git.addConfig('user.name', process.env.GH_USER_NAME);

  await git.addConfig('user.email', process.env.GH_EMAIL);

  const config = await git.listConfig();

  console.log(config, 'da config');
  
  return git;
};

const makeACommit = async () => {
  const files = ['test.csv'];
  const git = await setupGit();

  // add a file to stage
  await git.add(files);
  // commit the changes
  let result = await git.commit(
    'add changes automatically',
    files,
    {
      '--author': `${process.env.GH_USER_NAME} <${process.env.GH_EMAIL}>`,
      '--signoff': true,
      // '--gpg-sign': process.env.GH_GPG_KEY TODO: this requires to generate a GPG key in image and used to sign commits
    }
  );

  console.log(result, 'commit changes');
  // push to repo
  try {
    await git.push('origin', 'master');
  } catch (error) {
    console.error(error);
  }

  console.info('push finished');
}; 

module.exports = {
  makeACommit
};
