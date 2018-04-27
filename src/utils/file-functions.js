import { publicDecrypt } from "crypto";

// const Promise = require('bluebird');

// // turns off forgotten return warning in Bluebird
// Promise.config({
//   warnings: {
//     wForgottenReturn: false
//   }
// });

// const fs = Promise.promisifyAll(require('fs'));

// // this function accesses the file system
// // it returns a promise

// const getAllFiles = (dir) => {
//   return fs.readdirAsync(dir)
//   .then(fileNamesArr => {
//     const fileStatPromises = fileNamesArr.map(fileName => {
//       return fs.statAsync(dir + '/' + fileName)
//       .then(stats => {
//         const file = {};
//         file.filePath = dir + '/' + fileName;
//         file.isDirectory = !stats.isFile();
//         return file;
//       });
//     });
//     return Promise.all(fileStatPromises);
//   });
// };

const getAllFiles = (dir) => {

  const arr = [];
  let file;

  file = {};
  file.filePath = dir + '/' + "fileName";
  file.isDirectory = false;
  arr.push(file);

  file = {};
  file.filePath = dir + '/' + "dirName";
  file.isDirectory = true;
  arr.push(file);

  return new Promise((resolve, reject) => {
    resolve(arr);
  });
}

module.exports = {
  getAllFiles
};
