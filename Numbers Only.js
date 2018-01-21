/* 
Numbers Only
Make a function that copies an array, ONLY accepting the items that are numbers.

IT SHOULD RETURN A NEW ARRAY

ex:

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
HINT

Use typeof to determine type (ex: typeof 24 === "number" would be true)

Bonus (Only If You Have Time):

Make a second function that removes them from the given array. (instead of copying to a new array)
Do you need to return the array? */

 function numbersOnly(arr){
    var newarr =[];
    for (var i = 0; i< arr.length; i++){
        if(typeof(arr[i])=="number"){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}
numbersOnly([1, "apple", -3, "orange", 0.5]); 

function numbersOnlyRemove(arr){
    for (var i = 0; i < arr.length; i++) {
        while(typeof(arr[i]) != "number"){
            for (var k = i; k < arr.length; k++) {
                arr[k] = arr[k+1]
            }
            arr.pop()
        }
    }
    console.log(arr);
}
numbersOnlyRemove([1, "apple", -3, "orange", 0.5])