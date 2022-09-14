var x = 0;
while(x < 42) {
    if (x==0){
        console.log("LOOPING PERTAMA");
    }else if (x==22){
        console.log("LOOPING KEDUA");
    }
    if (x>0 && x<21){
        console.log(`${x} - I love coding`);
    }else if(x>21 && x<42){
        console.log(`${(22-x)+20} - I will become a mobile developer`);
    }
    x=x+2;
  }
