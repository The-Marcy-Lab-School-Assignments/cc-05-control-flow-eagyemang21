//1  //if the argument is a positive number, return the value.  
     //if the argument is a negative number, return the positive integer.
     //if the argument is not an integer, return "null"
    //typeof function
function absoluteValue(number){
    if (typeof number === "number"){
    if(number < 0){
        return (number * -1);
    }else{
        return number;
    }
    }else{
        return null;
    }
   }

console.log(absoluteValue(20));
