function kelompokAngka(arr){
    var x=0;
    var tiga =[];
    var genap = [];
    var ganjil = [];
    while(x<arr.length){
        if(arr[x] % 3 == 0){
            tiga.push(arr[x]);
        }else if(arr[x] % 2 == 0){
            genap.push(arr[x]);
        }else if (arr[x]%2 != 0){
            ganjil.push(arr[x]);
        }
        x++;
    }
    return [ganjil,genap,tiga];
    
    }
    
    //Test Case
    
    console.log(kelompokAngka([1,2,3,4,5,6,7]))
    
    //Output:[[1,5,7],[2,4],[3,6]]
    
    console.log(kelompokAngka([13,27,11,15]))
    
    //Output:[[13,11],[],[27,15]]
    
    console.log(kelompokAngka([]))
    
    //output:[[],[],[]]