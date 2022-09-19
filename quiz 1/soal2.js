function hitungVokal(str){
    var x = 0;
    var hitung = 0;
    while(x<str.length){
        switch(str[x].toLowerCase()) {
            case "a": {hitung++; break;}
            case "i": {hitung++; break;}
            case "u": {hitung++; break;}
            case "e": {hitung++; break;}
            case "o": {hitung++; break;}
        }x++;
    }
    return hitung;
    }
    
    // Test Cases
    
    console.log(hitungVokal("Adonis"))// Output:3
    
    console.log(hitungVokal("Error"))//Output:2
    
    console.log(hitungVokal("Eureka"))//Output:4
    
    console.log(hitungVokal("Rsch")) // Output: 0