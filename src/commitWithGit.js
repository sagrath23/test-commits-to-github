require('dotenv').config();
const util = require('util');
const fs = require('fs');
const gitRequester = require('simple-git/promise');


const setupGit = async (basePath) => {
  const git = gitRequester(basePath);

  // TODO: validate if config exists, in order to avoid overwrite it

  await git.addConfig('credential.helper', 'store');


  // TODO: Check how to log in into github


  // add name, email and all the config to push a signed commit
  await git.addConfig('user.name', process.env.GH_USER_NAME);

  await git.addConfig('user.email', process.env.GH_EMAIL);

  return git;
};

const cloneRepo = async () => {
  const git = await setupGit();
  const repoPath = `https://${process.env.GH_USER}:${process.env.GH_TOKEN}@github.com/${process.env.GH_CSV_REPO_PATH}`;

  // clone the repo
  await git.clone(repoPath);
};

const makeACommit = async () => {
  // clone csv repo
  await cloneRepo();

  // promisify fs functions & move new file to csv folder
  const copyFile = util.promisify(fs.copyFile);
  let result = await copyFile('./test.csv', './test-csv/test.csv');

  // add files to commit
  const files = ['test.csv'];
  const git = await setupGit('./test-csv');

  // add a file to stage
  await git.add(files);
  // commit the changes
  result = await git.commit(
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
