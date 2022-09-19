function graduate(arr) {
    var output = {};
    var x = 0;
    while(x<arr.length){
        var grad = "";
        if (arr[x].score > 85){
            grad = "mastered";
        }else if(arr[x].score>=60 && arr[x].score<=85){
            grad = "completed";
        }else if(arr[x].score<60){
            grad = "participated";
        }
        if (!output[arr[x].class]){
            output[arr[x].class] = [{
                "name": arr[x].name,
                "score":arr[x].score,
                "grade": grad
            }]
        }else{
                output[arr[x].class].push({
                    "name": arr[x].name,
                    "score":arr[x].score,
                    "grade": grad
                })
            }
        x++;
    } return output;
    
    }
    
    // TEST CASE
    // Contoh Input
    
    var arr = [
    
    {name:"Ahmad",score:80, class: "Laravel"},
    
    {name:"Regi",score:86, class: "Vuejs"},
    
    {name:"Robert",score:59, class: "Laravel"},
    
    {name:"Bondra",score:81, class: "Reactjs" }
    
    ]
    
    
    console.log(graduate(arr))
    
    /*Output
    
    {
    
    Laravel:[{name:"Ahmad",score:80, grade: "completed"}, { name: "Robert", score: 59, grade: "participated"}],
    
    Vuejs:[
    
    {name:"Regi",score:86, grade: "mastered"}
    
    ],
    
    Reactjs:[{name:"Bondra",score:81, grade: "completed"}]
    
    } 
    */