console.log("The Value of varials cand be changed During the execution of Programs...! ");

let a =7;
console.log(a);
a= "mukesh";
console.log(a);
console.log("Rules for choosing variable name");
console.log("Letter ,Digis,underscrors and $ sign allowed");
console.log("Must beging with a $ ,_,or letter ");
console.log("Not allowed start with Numbers Like 10mukesh (Note Allowed)");
// let 10mukesh = 9;//Not Allowed
console.log("Javascript reserved words connot be used as varibles names Like let var = 89 (Not Allowed)");
// let var = 89;//NOT ALLOWED

console.log("javascript is CASE SENSETIVE LAUNGUAGE");

let Mukesh = 10;
let mukesh = 90; //BOTH ARE DIFFRENT VARIABLES

// nnbbssu THESE ARE 7 PREMITIVE DATA TYPES IN JAVASCRIPT

console.log("PREMITIVE DATA TYPES IN JAVASCRIPTS ARE (nnbbssu) Number Null BigInt boolean string Symbol undefined")

let bigint = BigInt('78') + BigInt("89");
console.log(bigint);
let symbolDataType = Symbol("Mukesh") ;
console.log(symbolDataType);

console.log("Objecst are Non-Premitive data Types in Javascripts");
const item = {"firstName": "Mukesh" , "lastName" : "Wakude"};
console.log(item);


//Tricy Quetions

let _stringValue = "Mukesh";
let _intValue = 7;
console.log(_stringValue + _intValue);

const tricyObject = {"firstName": "Mukesh" , "lastName" : "Wakude"};

tricyObject["name"] = "name";
console.log(tricyObject.firstName);