"use strict";
//enumerations
//Restrictions 
// const aisle = 0;
// const middle = 1;
// const win = 2;
// if(seat===aisle){
//     //you can do like that but what if someone changes the variable
//     //not a good code
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["aisle"] = 0] = "aisle";
    SeatChoice[SeatChoice["middle"] = 1] = "middle";
    SeatChoice[SeatChoice["window"] = 2] = "window";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.aisle; //makes code reliable 
//easier to add say premiumSeat in enum 
//hover : (enum member) val 0.... 1,2 subsequent number 
//say you have a spl code 
var SeatChoic;
(function (SeatChoic) {
    SeatChoic[SeatChoic["aisle"] = 10] = "aisle";
    SeatChoic[SeatChoic["middle"] = 22] = "middle";
    SeatChoic[SeatChoic["window"] = 23] = "window";
})(SeatChoic || (SeatChoic = {}));
var SeatChoi;
(function (SeatChoi) {
    SeatChoi["aisle"] = "aisle";
    SeatChoi[SeatChoi["middle"] = 22] = "middle";
    SeatChoi[SeatChoi["window"] = 23] = "window"; //this will automatically be 23
})(SeatChoi || (SeatChoi = {}));
//once we start to put strings, say only first mem as string, it will ask for other initialisations as well
//enum works on ifee (Check bts)
//use const enum (To make it less JS code to compile)
