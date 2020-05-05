const { makeACommit } = require('./commitWithGit');

const init = async () => {
  await makeACommit();
};

init();
