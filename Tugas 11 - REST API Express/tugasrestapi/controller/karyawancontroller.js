const { json } = require('express')
const fs = require('fs')

const path = 'data.json'

class karyawancontroller {
    static register(req,res){
        // res.status(200).json({message:"testing"})
        fs.readFile((path), (err,data)=>{
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
                fs.writeFile(path,JSON.stringify(newdata,(err)=>{
                    if(err){
                        res.status(400).json({
                            error:"kesalahan menyimpan data"
                        })
                    }else{
                        res.status(201).json({
                            message:"berhasil register"
                        })
                    }
                }))
            }
        })
    }
}

module.exports = karyawancontroller