const { json } = require('express')
const fs = require('fs')
const fsPromises = require('fs/promises')

const path = 'data.json'

class karyawancontroller {
    static register(req,res){
        // res.status(200).json({message:"testing"})
        fs.readFile(path, (err,data)=>{
            if(err){
                req.status(400).json({
                    error: "terdapat kesalahan"
                })
            }else{
                let datanow = JSON.parse(data)
                let {user} = datanow
                let {name,role,password} = req.body
                let newkaryawan = {name,role,password,islogin:false}        
                user.push(newkaryawan)
                let newdata = {...datanow,user}
                fs.writeFile(path,JSON.stringify(newdata),(err)=>{
                    if(err){
                        res.status(400).json({
                            error:"kesalahan menyimpan data"
                        })
                    }else{
                        res.status(201).json({
                            message:"berhasil register"
                        })
                    }
                })
            }
        })
    }
    static ambilsemua(req,res){
        fs.readFile(path,(err,data)=> {
            if (err){
                res.status(400).json({
                    error:"gagal mengambil data"
                })
            }else{
                let datanow = JSON.parse(data)
                res.status(201).json({
                    message:"Berhasil get karyawan",
                    data: datanow.user
                })
            }
        })
    }
    static login(req,res){
        fsPromises.readFile(path)
        .then((data)=>{
            let datanow = JSON.parse(data)
            let {user} = datanow //{user} harus sama dengan key di json
            let {name, password} = req.body
            let indexkar = user.findIndex(users => users.name == name)
            // console.log(indexkar)
            if(indexkar == -1){
                res.status(404).json({
                    error: "username tidak ditemukan"
                })
            }else{
                let karyawanlogin = user[indexkar]
                if(karyawanlogin.password == password){
                    karyawanlogin.islogin=true;
                    user.splice(indexkar,1,karyawanlogin)
                    let databaru ={...datanow,user}
                    return fsPromises.writeFile(path, JSON.stringify(databaru))
                }else{
                    res.status(400).json({
                        error:"password salah"
                    })
                }
            }
        })
        .then(()=>{
            res.status(200).json({message:"berhasil login"})
        })
        .catch((err)=>{
            console.error();
        })
    }
}

module.exports = karyawancontroller