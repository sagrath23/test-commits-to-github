const { makeACommit } = require('./commitWithGit');

console.log(makeACommit);

const init = async () => {
  await makeACommit();
};

init();
