class OlahString {

static palindrome(input) {
    let asli = input;
    let x = 0;
    let after=""; 
    while(x<input.length){
        after=after+input[input.length-(x+1)];
        x++;
    }
    if(asli == after){
        console.log(true)
    }else{
        console.log(false)
    }
}

static ubahKapital(input){
    let after = input;
    console.log(after.charAt(0).toUpperCase() + after.slice(1))
}
}

OlahString.palindrome('katak') // Output: true

OlahString.palindrome('sanbers') // Output: false

OlahString.ubahKapital('asep') // Output : Asep

OlahString.ubahKapital('abduh') // Output: Abduh
