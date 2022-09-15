function balikKata(inputan){
    var x=0;
    var y = "";
    while(x<inputan.length){
        y=y+inputan[inputan.length-(x+1)];
        x++;
    }
    return y;
}

console.log(balikKata("I am Sanbers"));