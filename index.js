
function reducer(str1, str2){
    str1 = [...str1];
    str2 = [...str2];
    
    var array1 =  (str1.length < str2.length) ? str2: str1;
    var array2 =  (str1.length < str2.length) ? str1: str2;
    
    var array =[];
    
        for(var a =0; a < array1.length; a++){
    
            if(array1[a].charAt(0) === array2[a].charAt(0)){
                array += array1[a]
            }   
        }

        return array.toString().split(",").join("");
}



    


   
