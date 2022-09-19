function tandaiA(str) {
    var x=0;
    var output="";
    while(x<str.length){
        if(str[x].toLowerCase() == "a"){
            output=output+"x";
        }else{
            output=output+str[x];
        }
        x++;
        
    }
    // code di sini
    return output;
    
    }
    
    // Tes Cases
    console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
    console.log(tandaiA("garuda")) // gxrudx
    console.log(tandaiA("kucing")) // kucing