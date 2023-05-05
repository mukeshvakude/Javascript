console.log("Why Loops are Developed ? ");
console.log("if we need to iterate over big data then we used loops");
console.log("There 3 types of loops For , while and do while loops");

//For Loops Syntax

/* for (initialization ; conditions ; increament and decreament){
    //Statements....
    
}*/

console.log("Wright a program to print 1 to 10 numbners using for loop and while loop");
//METHOD 1
for (let i = 1; i <= 5; i++)
    console.log(i)

//METHOD 2
const carsData = ["BMW", "Volvo", "Saab", "Ford"];
let k = 0;
let textData = "";

for (;carsData[k];) {
  textData += carsData[k];
  k++;
}

console.log('METHOD 2 for loop --->' , textData);


console.log("There are 3 more types in for loops that is (for in) (for of) and (forEach)");
/* The JavaScript for in loops :

 - SYNTAX
        for (key in object) {
            code block to be executed
        }

 -IMPORTANT NOTES
 1) Do not use for in over an Array if the index order is important.
 2) The index order is implementation-dependent, and array values may not be accessed in the order you expect.
 3) It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

const person = { fname: "Mukesh", lname: "Wakude", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
console.log("for in statement loops through the properties of an Object : ", text);

/* The JavaScript for of loops :

 - SYNTAX
        for (variable of iterable) {
            // code block to be executed
        }

 -IMPORTANT NOTES
 1) for of used in iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/

const cars = ["BMW", "Volvo", "Mini"]; //Array

let data = "";
for (let x of cars) {
    data += x;
}
console.log("for of  Looping over an Array : ", data);


let language = "JavaScript"; //String

let lang = "";
for (let x of language) {
    lang += x;
}

console.log("for of  Looping over  String : ", lang);

/* The JavaScript forEach in loops :

 - SYNTAX
        array.forEach(function (item ,itemIndex,arrayItSelf){
            code block to be executed
        }


 -IMPORTANT NOTES
 1) Note that the function takes 3 arguments:

        a) The item value
        b) The item index
        c) The array itself
*/

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

console.log("ForEach loops Example output : ",txt);



