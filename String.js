//givenString = "";

function Threader(givenString){

    var chunks = [];

    givenString = [...givenString];
    for(var a =0; a < givenString.length; a ++){

      givenString[a] = Number(givenString[a]);
      
    }
    var arrays = [];
  
    for(var x =0; x < givenString.length; x++){
       
        if(givenString[x] % 2 ==0 && givenString[x+1] % 2 !==0){
          arrays.push(givenString[x] + "" + givenString[x+1]);
             
        }
        else if(givenString[x] % 2 == 0 && givenString[x+1] % 2 ==0){
            arrays.push( givenString[x] + "*")
        }

        else if(givenString[x] % 2 !== 0 && givenString[x+1] % 2 !==0){
            arrays.push( "-" + givenString[x+1])
        }
      
    }
    var string = arrays.toString().split(",").join("");
    var payload = string.replace("undefined", "");
    
    return payload;
   


}

var data = Threader("6765442389");
console.log(data);