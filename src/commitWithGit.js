import git from 'simple-git';

export const makeACommit = async () => {

  // add a file to stage
  const result = await new Promise((resolve, reject) => {
    git.add(['../test.csv'], (error, data) => {
      if(error) {
        reject(error);
      }

      resolve(data);
    });
  });

  console.log(result);
}; 