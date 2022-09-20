import {sapa} from './lib/soal1';

const myArgs = process.argv.slice(2); // supaya command node nya ndk di hiraukan

if (myArgs[0].toLowerCase() == 'sapalah'){
    console.log(sapa(myArgs[1]));
}else{
    console.log("masukkan perintah");
}