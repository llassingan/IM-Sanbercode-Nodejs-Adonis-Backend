function periksaDokter(jumlahantri, callback){
    if (jumlahantri > 20){
        callback(false)
    }else if (jumlahantri <10){
        callback(true)
    }
}

let jumlahantri = 23

periksaDokter(jumlahantri, function(sebentar){
    if(sebentar){
        console.log("oke nunggu")
    }else{
        console.log("caw ah")
    }
})