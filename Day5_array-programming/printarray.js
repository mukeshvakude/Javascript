//ARRAY IS NON-PREMITIVE DATA TYPE AND ARRAY DATA TYEPS IS OBJECT

const numberArray = [12,23,45,6,78,23,44]; //INITIALIZATION 1
const cars = new Array("Saab", "Volvo", "BMW"); //INITIALIZATION 2

console.log("We can also initialize array using New keyword");
console.log("ARRAY DATA TYPE IS" , typeof numberArray);

//Array index always start from 0 

//Find length of array 

console.log("Array length using length function " ,numberArray.length);

//ACCESS THE FIRST ELEMENT OF ARRAY
console.log("Fisrt Element " ,numberArray[0]);

//ACCESS THE LAST ELEMENT OF ARRAY
console.log("Last Element " ,numberArray[numberArray.length -1]);


// Change the value of array elements 

numberArray[2] = 99;



//print each array elements using for loop
console.log("Array element using FOR loop");

for(let i=0 ;i < numberArray.length ;i++){
    console.log(numberArray[i]);
}


//print each array elements using while loop
console.log("Array element using WHILE loop");
let i=0 ;
while(i < numberArray.length){
    console.log(numberArray[i]);
    i++;
}



