
// function sayHello(){
//     console.log("Harsh Pruthi from functions");
// }


// for(let i=0; i<5; i++){
//     console.log("Harsh Pruthi from loop");
// }

// for(let i=0; i<5; i++){
//     sayHello();
// }


// function addNumbers(num1, num2){
//     console.log(num1+num2);
// }

// let result = addNumbers(5,6);
// console.log(result);

function addNumbers(num1, num2){
    return num1+num2;
}

let result = addNumbers(5,6);
console.log(result); //11

let result2 = addNumbers();
console.log(result2); //NaN

let result3 = addNumbers(5, "a");
console.log(result3);

function greet1(userName){
    console.log(`Hello my name is ${userName}`);
}

greet1("Harsh Pruthi");
greet1();    //undefined 

let value;
console.log(!!value);//false

function greet(user){
    if(!user){
        // for "" and undefined
        return "Not there";
    }
    return user;
    
}
console.log(greet("Harsh"))

let x = "";
console.log(!x);

