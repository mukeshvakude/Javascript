let number = 56;

//CHECK GIVEN NUMBER IS PRIME OR NOT
let primeNumber = isprime(number); //Prime Number Function Call 

if(primeNumber){ //if primeNumber is true then give number is prime
    console.log(number , " is prime Number");
}else{ //if primeNumber is false  then give number is Not  prime
    console.log(number ," is Not prime Number");
}

//FIND PRIME NUMBER FROM RANGE OF 1-100
let primeNumbers = "";
for(let j =1 ;j<=100 ;j++){
    if(isprime(j)){
        primeNumbers += " " + j;
        // console.log(j);
    }
}

console.log("PRIME NUMBER  FROM 1-100 is" + primeNumbers );




//PRINT ONLY EVEN PRIME NUMBERS FROM 1-100
let even_prime_numbers = "";
for(let j =1 ;j<=100 ;j++){

    if(j % 2 == 0  && isprime(j)  ){
        even_prime_numbers += " " + j;
        // console.log(j);
    }
}

console.log("EVEN PRIME NUMBER  FROM 1-100 is " + even_prime_numbers );

//PRINT ONLY ODD PRIME NUMBERS FROM 1-100
let odd_prime_numbers = "";
for(let j =1 ;j<=100 ;j++){
    if (j % 2 != 0  && isprime(j) ){
        odd_prime_numbers += " " + j;
        // console.log(j);
    }
}

console.log("ODD PRIME NUMBER  FROM 1-100 is " + odd_prime_numbers );

// PRINT ADDITION OF ALL PRIME NUMBER FROM RANGE 1-100

let primeNumberSum  = 0 ;


for(let j =1 ;j<=100 ;j++){
    if(isprime(j)){
        primeNumberSum += j;
    }
}

console.log("PRIME NUMBER SUM FROM 1-100 is "+primeNumberSum);

function isprime(number) { //Prime Number Function

    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}