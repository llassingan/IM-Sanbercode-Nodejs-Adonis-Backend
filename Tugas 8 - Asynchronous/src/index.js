import Bootcamp from "./lib/bootcamp.js";

const args = process.argv.slice(2)
let input = args[1]
switch(args[0]){
    case "register" : Bootcamp.register(input); break;
    case "login" : Bootcamp.login(input); break;
    case "addsiswa" : Bootcamp.addSiswa(input); break;
    default: break; 
}