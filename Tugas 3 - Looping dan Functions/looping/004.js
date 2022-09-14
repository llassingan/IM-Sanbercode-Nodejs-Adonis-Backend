function makeLadder(sisi) {
    var x = 1;
    var y;
    var out;
    while(x<=sisi) {
        y=1;
        out="";
        while(y<=x){
            out=out+"#";
            y++;
        }
        console.log(out);
        x++;
    }// your code
     
  }
  
  // TEST CASE
  makeLadder(7)