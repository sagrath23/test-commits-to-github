require('dotenv').config();
const gitRequester = require('simple-git/promise');

const setupGit = async (basePath) => {
  const git = gitRequester(basePath);

  console.log(process.env.GH_TOKEN, 'da token');

  return git;
}

const makeACommit = async () => {
  const git = await setupGit();

  // add a file to stage
  await git.add(['test.csv']);
  // commit the changes
  let result = await git.commit('add changes automatically');

  console.log(result, 'commit changes');
  // push to repo
  await git.push('origin', 'master');

  console.info('push finished');
}; 

module.exports = {
  makeACommit
};
