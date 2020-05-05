const fetch = require('node-fetch');

/*
Agus Code: 

require('dotenv').config()
const axios = require('axios');

const ghToken = process.env.GH_TOKEN;
const owner = process.env.GH_OWNER;
const repo = process.env.GH_REPO;

const baseUrl = `https://api.github.com/repos/${owner}/${repo}/git`;

async function request(method, uri, body) {
  const response = await axios({
    method,
    url: `${baseUrl}/${uri}`,
    headers: {
      Authorization: `token ${ghToken}`,
      Accept: 'application/vnd.github.v3+json'
    },
    data: JSON.stringify(body)
  });

  return response.data;
}

function createBlob(content) {
  return request('post', 'blobs', { content, encoding: 'utf-8' });
}

function createTree(tree, baseTreeSha) {
  return request('post', 'trees', { tree, base_tree: baseTreeSha });
}

function createCommit(message, tree, parents) {
  return request('post', 'commits', { message, tree, parents });
}

function getLastCommit(branchName) {
  return request('get', `refs/heads/${branchName}`);
}

function updateBranchReference(branchName, newSha) {
  return request('patch', `refs/heads/${branchName}`, { sha: newSha });
}

async function createNewCommit() {
  // Modify this constants to modify commit changes
  const BRANCH = 'master';
  const COMMIT_MESSAGE = 'Automatic commit';
  const NEW_FILES = [
    { path: 'file1.txt', content: 'this is file 1' },
    { path: 'file2.txt', content: 'this is file 2' },
    { path: 'file3.txt', content: 'this is file 3' }
  ];

  const newBlobs = await Promise.all(NEW_FILES.map(async (newFile) => {
    const sha = (await createBlob(newFile.content)).sha;

    return { 
      path: newFile.path,
      mode: '100644',
      type: 'blob',
      sha
    };
  }));

  const newTreeSHA = (await createTree(newBlobs)).sha;

  const lastCommit = (await getLastCommit(BRANCH)).object.sha;

  const newCommitSHA = (await createCommit(COMMIT_MESSAGE, newTreeSHA, [lastCommit])).sha;

  await updateBranchReference(BRANCH, newCommitSHA);

  console.log('SUCCESSFUL NEW COMMIT');
}

(async () => {
  try {
    await createNewCommit();
  } catch (e) {
    console.error(e);
  }
})();
*/ 

const makeACommitWithAPI = () => {
  console.log('github token');
}

module.exports = {
  makeACommitWithAPI
};
