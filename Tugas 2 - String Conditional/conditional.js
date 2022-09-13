var nama="Sanber";
var peran="werewolf";

if (nama==""){
    console.log("Nama harus diisi!")
}else{
    if (peran==""){
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
    }else if(peran.toLowerCase()=="penyihir"){
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
    }else if (peran.toLowerCase()=="guard"){
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
    }else if(peran.toLowerCase()=="werewolf"){
        console.log(`Selamat datang di dunia Werewolf, ${nama}`)
    }
}

// soal 2

var hari = 31; 
var bulan = 12; 
var tahun = 2022;
if ((hari>=1 && hari<=31)&&(bulan>=1 && bulan<=12) && (tahun>=1900 && tahun<=2200)) {
    switch(bulan) {
        case 1:   { console.log(`${hari} Januari ${tahun}`); break; }
        case 2:   { console.log(`${hari} Februari ${tahun}`); break; }
        case 3:   { console.log(`${hari} Maret ${tahun}`); break; }
        case 4:   { console.log(`${hari} April ${tahun}`); break; }
        case 5:   { console.log(`${hari} Mei ${tahun}`); break; }
        case 6:   { console.log(`${hari} Juni ${tahun}`); break; }
        case 7:   { console.log(`${hari} Juli ${tahun}`); break; }
        case 8:   { console.log(`${hari} Agustus ${tahun}`); break; }
        case 9:   { console.log(`${hari} September ${tahun}`); break; }
        case 10:   { console.log(`${hari} Oktober ${tahun}`); break; }
        case 11:   { console.log(`${hari} November ${tahun}`); break; }
        case 12:   { console.log(`${hari} Desember ${tahun}`); break; }
}}else{
    console.log(`tanggal/bulan/tahun diluar range`)
}