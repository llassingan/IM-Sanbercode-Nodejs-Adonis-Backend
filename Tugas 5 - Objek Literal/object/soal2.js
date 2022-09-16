function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = [];
    var x = 0;
    while(x<arrPenumpang.length){
        y = {};
        var fee = 2000*((1+rute.indexOf(arrPenumpang[x][2])) -  (1+rute.indexOf(arrPenumpang[x][1])))
        y.penumpang = arrPenumpang[x][0];
        y.naikDari = arrPenumpang[x][1];
        y.tujuan= arrPenumpang[x][2];
        y.bayar = fee;
        output.push(y);
        x++;
    }
    return output;
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]