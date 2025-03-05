//enumerations

//Restrictions 
// const aisle = 0;
// const middle = 1;
// const win = 2;

// if(seat===aisle){
//     //you can do like that but what if someone changes the variable
//     //not a good code
// }

enum SeatChoice {
    aisle,
    middle, 
    window
}

const hcSeat = SeatChoice.aisle;    //makes code reliable 

//easier to add say premiumSeat in enum 

//hover : (enum member) val 0.... 1,2 subsequent number 

//say you have a spl code 
enum SeatChoic {
    aisle=10,
    middle=22, 
    window
}

enum SeatChoi {
    aisle="aisle",
    middle=22, 
    window          //this will automatically be 23
}
//once we start to put strings, say only first mem as string, it will ask for other initialisations as well

//enum works on ifee (Check bts)

//use const enum (To make it less JS code to compile)