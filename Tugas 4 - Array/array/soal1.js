function dataHandling(data){
    var x=0;
    var y="";
    // console.log(data[x][0]);
    while (x<data.length){
        y=y+`
    Nomor ID:  ${data[x][0]}
    Nama Lengkap: ${data[x][1]}
    TTL: ${data[x][2]} ${data[x][3]}
    Hobi: ${data[x][4]}
        `
        x++;
    }return y;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
console.log(dataHandling(input));