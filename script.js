var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}


//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);
 
theNumber = theNumber * 2;
 
//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));


function Splinter (won, too) {
    var z = won * too;
    var theArray = [won, too, z];
    return theArray
}

console.log(Splinter(1,2));

//Take your project and add a 'Splinter' function. 
//The function should take in 2 numbers, multiply them 
//together saved under a locally scoped variable called 'z'. 
//Then create an array that stores the first argument, 
//second argument, and z. Return that array.

//Then console log out the Splinter function, 
//passing in 1 and 2.
//

//

//

//