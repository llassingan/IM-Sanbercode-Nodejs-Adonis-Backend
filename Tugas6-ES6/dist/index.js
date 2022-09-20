import { sapa } from './lib/soal1.js';
const myArgs = process.argv.slice(2); // supaya command node nya ndk di hiraukan
// console.log(myArgs);

if (myArgs[0].toLowerCase() == 'sapalah') {
  let nama = myArgs[1];
  console.log(sapa(nama));
} else {
  console.log("masukkan perintah");
}