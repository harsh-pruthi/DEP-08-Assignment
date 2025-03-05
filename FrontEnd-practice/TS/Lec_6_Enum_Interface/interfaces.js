"use strict";
//Identical to types 
// Broad/Superficial view of class 
const harsh1 = {
    dbId: 22,
    email: "h@mail.com",
    userId: 112,
    startTrail: () => {
        return "hello world";
    },
    getCoupon: (name) => {
        return 10;
    }
};
harsh1.email = "Harsh@hp.com";
// harsh.dbId = 22 //Not allowed
