let number = 7;

//Check given number is Even or Odd

if(number %2 == 0){
    console.log(number , " is Even Number");
}else{
    console.log(number ," is Odd Number");
}

// Find even Number From 1-20
console.log("EVEN  NUMBER FROM 1-20");
for(let evenNumber = 0 ; evenNumber <= 20 ;evenNumber++){
    if(evenNumber %2 ==0 ){
        console.log(evenNumber);
    }
}

// Find Odd Number From 1-20
console.log("ODD  NUMBER FROM 1-20");
for(let oddNumber = 0 ; oddNumber <= 20 ;oddNumber++){
    if(oddNumber %2 == 1){
        console.log(oddNumber);
    }
}

// Sum of Even and Odd Number from 1-20

let sum_of_even_number = 0 , sum_of_odd_number = 0;
for(let i = 0 ; i <= 20 ;i++){
    if(i %2 == 1){
        sum_of_odd_number += i;
    }else{
        sum_of_even_number += i;
    }
}

console.log("Sum of even number is " + sum_of_even_number);
console.log("Sum of odd number is " + sum_of_odd_number);



