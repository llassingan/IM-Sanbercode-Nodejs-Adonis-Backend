import fs from 'fs'

const path = 'data.json'

export const readdata = () => {
    fs.readFile(path, (err,data)=>{
        if (err) console.log(err)
        console.log(JSON.parse(data))
    }) // tanpa "../" karena path nya relatif terhadap index.js bukan callabck.js
}

export const writedata = (datanew) => {
    fs.readFile(path, (err,data)=>{
        if (err) console.error(err)
        let dataobj = JSON.parse(data)
        dataobj.push(datanew)
        fs.writeFile(path, JSON.stringify(dataobj),{encoding: 'utf-8'},(err)=> {
            if (err) console.log(err)
        })
    })
   
}