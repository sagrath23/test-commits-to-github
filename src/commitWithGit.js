const git = require('simple-git');

const makeACommit = async () => {

  // add a file to stage
  const result = await new Promise((resolve, reject) => {
    // git function receive a path param, that can be assumed as the 
    // current path if it is not provided
    git().add(['test.csv'], (error, data) => {
      if(error) {
        reject(error);
      }

      resolve(data);
    });
  });

  console.log(result);
}; 

module.exports = {
  makeACommit
};
