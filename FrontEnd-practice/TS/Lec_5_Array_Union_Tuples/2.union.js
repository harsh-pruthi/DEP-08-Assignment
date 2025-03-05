"use strict";
// be in a situation, not sure about what data type will come in 
// reminds you of any, but should not use any 
// will help to avoid any into your ts code
let score = 33;
//not sure always going to be a number, say a string as well
let scor = 45;
//should use it wisely and as many possibilities you wish instead of any 
scor = false;
let hitesh = {
    name: "hitesh",
    id: 1234
};
//say now hitesh is allowed as admin 
hitesh = { userName: "hc", id: 334 };
//Remove Admin from hitesh if you wish to revoke access 
function getDbID(id) {
    //Making API Call
    console.log("Db ID is", id);
}
getDbID(3);
getDbID('3');
//Problem comes up in manipulation
// function getDbiD(id: number|string){
//     id.toLowerCase();   //error and no suggestion 
//     //It treats it as a new datatype which can eventually be a number or string
// }
//FIX
function getDbiD(id) {
    //Making API Call
    if (typeof id === "string") {
        id.toLowerCase();
        //Now it's 100% string
    }
    console.log("Db ID is", id);
}
//array 
const data = [1, 2, 3]; //this means it can have either number or strings 
//but mix 
const data2 = ['122', 'af', 12];
//Whole idea of using TS is not to use ANY and make it strict 
let pi = 3.14; //make fixed allocation using literal
// pi = 4.143;
let seatAllot;
seatAllot = 'aisle';
// seatAllot="crew";   //can be only of the three types
