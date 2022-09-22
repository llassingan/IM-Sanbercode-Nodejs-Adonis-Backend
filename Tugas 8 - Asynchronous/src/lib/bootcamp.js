import Karyawan from "./karyawan"
import fs from "fs"
import "core-js/stable"
import fsPromises from "fs/promises"
const path = 'data.json'

class Bootcamp{
    static register(input) {
        let [nama, password, role] = input.split(',');
        fs.readFile(path, (err,data) => {
            if(err){
                console.log(err);
            }
            let existingdata = JSON.parse(data);
            let karyawan = new Karyawan(nama, password, role)
            existingdata.push(karyawan)
            fs.writeFile(path, JSON.stringify(existingdata),(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("berhasil register")
                }
            })
        })
    }
    static login(input){
        let [nama,password] = input.split(",");
        fsPromises.readFile(path)
        .then((data) => {
            let employees = JSON.parse(data)
            let indexemp = employees.findIndex((emp)=> emp._nama == nama)
            if(indexemp == -1){
                console.log("data tidak ditemukan")
            }else{
                let employee = employees[indexemp]
                if(employee._password == password){
                    employee._islogin = true;
                    employees.splice(indexemp,1,employee)
                    console.log("berhasil login")
                    return fsPromises.writeFile(path,JSON.stringify(employees))
                }else{
                    console.log("password salah")
                }
            }
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

    static addSiswa(input){
        let [siswanya,trainernya] = input.split(",");
        let admin = "Bondra"
        fsPromises.readFile(path)
        .then((data) => {
            let employees = JSON.parse(data)
            let adminlogin = employees.findIndex((emp)=> emp._nama == admin)
            let indexemp = employees.findIndex((emp)=> emp._nama == trainernya)
            if(indexemp == -1){
                console.log("data tidak ditemukan")
            }else{
                let empadmin = employees[adminlogin]
                let employee = employees[indexemp]
                if(empadmin._islogin == true){
                    employee._student.push({"nama":siswanya});
                    employees.splice(indexemp,1,employee)
                    console.log("berhasil add Siswa")
                    return fsPromises.writeFile(path,JSON.stringify(employees))
                }else{
                    console.log("belum login")
                }
            }
        })
        .catch ((err)=>{
            console.log(err)
        })
    }
}

export default Bootcamp;