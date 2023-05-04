console.log("Arithematic Operators");
let a = 7;
let b= 3;
let c = 20;
let d = "7";
console.log("+ Operator " ,a+b);
console.log("- Operator " ,a-b);
console.log("* Operator " ,a*b);
console.log("/ Operator " ,a/b);
console.log("** exponetional Operator " ,a**b);
console.log("% Modulus (Division Remainder) " ,a%b);
console.log("++ post Incrementoperator " ,a++);
console.log("++ pre increment operator " ,++a);
console.log("-- post decrementoperator " ,a--);
console.log("-- pre decrement operator " ,--a);

console.log("Logical Operators");
console.log(" && Operator " ,a<b && a>0);
console.log(" || Operator " ,a>b || a>0);
console.log("! 	logical not " ,!true);

console.log("Comparison Operaors");
console.log(">= operator ", a>=b);
console.log("<= operaor " ,a<=b);
console.log("!= operaor " ,a!=b);
console.log("== operaor " ,a == d);
console.log("=== operaor " ,a === d);
console.log( "? ternary operator " , (a > b) ? "a is greter than b" : "b is greater than a");


console.log("Bitwise Operaor ");
console.log("& operator ", a&b); //0111 & 0011 = 0011 = 3  Notes : 0 & 1 = 0 , 1 & 1 = 1 , 0 & 0 = 0 , 1 & 0 = 0
console.log("| operator ", a|b); //0111 | 0011 = 0111 = 7 Notes : 0 | 1 = 1 , 1 | 1 = 1 , 0 | 0 = 0 , 1 | 0 = 1


console.log("Write a program find greate number from 3 number");

console.log("METHOD 1 ");
if(a > b){
    if(a >c )
        console.log( "a is greater than b & c");
    else 
     console.log("c is greater b & a");
}else if(b > a ){
    if(b > c )
        console.log( "b is greater than a & c");
    else 
        console.log("c is greater b & a");
}

console.log("METHOD 2");

if(a > b && a >c){
    console.log( "a is greater than b & c");

}else if(b > a  && b > c){   
        console.log( "b is greater than a & c");    
}else 
    console.log("c is greater b & a");




