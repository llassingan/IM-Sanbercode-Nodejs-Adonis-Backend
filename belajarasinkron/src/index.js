import { readdata,writedata } from "./lib/fscallback.js";

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "readdata": readdata(); break;
    case "writedata": 
        let [rawname,rawkelas] = args[1].split(",")
        let [key1,val1] = rawname.split(":")
        let [key2,val2] = rawkelas.split(":")
        let obj ={}
        obj[key1] = val1
        obj[key2] = val2
        writedata(obj); break;
    default: break;
}