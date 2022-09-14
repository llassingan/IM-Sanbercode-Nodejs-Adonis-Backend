function makeRectangle(panjang,lebar) {
    var x=1;
    var y;
    var out;
    while(x<=lebar){
        out = "";
        y=1;
        while(y<=panjang){
            out=out+"#";
            y++  
        }
        console.log(out);
        x++
    } 
  }
  
  // TEST CASE
  
  makeRectangle(8,4)