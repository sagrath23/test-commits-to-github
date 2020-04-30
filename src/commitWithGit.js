const git = require('simple-git');

const makeACommit = async () => {

  // add a file to stage
  let result = await new Promise((resolve, reject) => {
    // git function receive a path param, that can be assumed as the 
    // current path if it is not provided
    git().add(['test.csv'], (error, data) => {
      if(error) {
        reject(error);
      }

      resolve(data);
    });
  });

  console.log(result, 'stage file');

  // commit the changes
  result = await new Promise((resolve, reject) => {
    git().commit('add changes automatically', (error, data) => {
      if(error) {
        reject(error);
      }

      resolve(data);
    });
  });

  console.log(result, 'commit changes');

  // push to repo
  result = await new Promise((resolve, reject) => {
    git().push('origin', 'master', (error, data) => {
      if(error) {
        reject(error);
      }

      resolve(data);
    });
  });

  console.log(result, 'pushed changes');
}; 

module.exports = {
  makeACommit
};
