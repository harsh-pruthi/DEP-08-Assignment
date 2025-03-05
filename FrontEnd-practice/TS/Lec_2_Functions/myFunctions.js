"use strict";
// function addTwo(num){
//     num.toUpperCase();
//     return num +2
// }
// addTwo(5);
//Hover and you get any 
//Problem : You can go inside function and add toUpperCase() becomes a string 
//Problem : If you convert 5 like "5" it'll work 
//Fix Specify num:number Fixes both the problems 
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// function getUpper(val){
//     //I did not get suggestion also, coz val is any
//     return val.toUpperCase();
// }
//getUpper(6) //again
function getUpper(val) {
    //I did not get suggestion also, coz val is any
    return val.toUpperCase();
}
getUpper('Harsh'); //again
// function signUpUser(name, email, password){
// }
// //this is bad as 
// signUpUser(1,2,3);  //TS will be happy as all three are any so fix it 
function signUpUser(name, email, isPaid) {
}
//this is bad as 
signUpUser("hitesh", "hitesh@lco.dev", false); //TS will be happy as all three are any so fix it 
// let loginUser = (name: string, email: string, isPaid: boolean) => {
// }
//How to pass on default values 
// loginUser("h", "h@mail.com");
// // isPaid is not provided Error
let loginUser = (name, email, isPaid = false) => {
};
loginUser("h", "h@mail.com");
// function addThree(num: number){
//     //return num+3
//     return "Hello"
// }
// let myValue = addThree(4);
// //This is Valid but problem 
function addThree(num) {
    return num + 3;
}
let myValue = addThree(4);
//How to handle more than one type?
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
//How to return type in arrow function
const getHello = (s) => {
    return "";
};
const heroes = ["thor", "spiderman", "ironman"];
heroes.map(hero => {
    return `hero is ${hero}`;
});
//hero is automatically string 
const heros = [1, 2, 3]; // now automatically changes to number
//You don't have to explicitly mention (hero: string)
//But better syntax to handle 
// heroes.map((hero):string=>{
//     return 1
// })
//Even if you are not returning anything it's good to mention void 
function consoleError(errMsg) {
    console.log(errMsg);
}
// function handleError(errMsg: string): void{
//     console.log(errMsg);
// }
//Never returns a value -> Mentioned in docs, value which is never observed (Forceful termination)
function handleError(errMsg) {
    throw new Error(errMsg);
}
