function arrayToObject(arr) {
    var x = 0;
    var obj ={};
    var now = new Date()
    var thisYear = now.getFullYear()
    
    while(x<arr.length){
        var temp = {};
        temp.firstName = arr[x][0];
        temp.lastName = arr[x][1];
        temp.gender = arr[x][2];
        if ((thisYear - arr[x][3])<1 || isNaN(arr[x][3])){
            temp.age = "Invalid Birth Year";
        }else{
            temp.age = thisYear - arr[x][3];
        }
        
        var objname =  temp.firstName + " " + temp.lastName;
        obj[objname] = temp;
        console.log((x+1).toString()+". "+objname+": ",obj[objname]);
        x++;
    }

}
 
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
 
// Error case 
arrayToObject([]) // ""