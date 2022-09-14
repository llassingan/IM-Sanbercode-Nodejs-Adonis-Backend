for(var angka = 1; angka <= 20; angka++) {
    if (angka % 3 == 0 && angka % 2 != 0){
        console.log(`${angka} - I Love Coding`);
    }else if (angka % 2 == 0){
        console.log(`${angka} - Berkualitas`);
    }else if (angka % 2 != 0){
        console.log(`${angka} - Santai`);
    }
  } 