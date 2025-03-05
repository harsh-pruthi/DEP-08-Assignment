"use strict";
//You can extend it and reopen it, make sure you don't have same name of interface and module 
//Read from tslang doc as well
//Writing a new interface is fine -> This is called ReOpening of the interface
// Add in property 
const harsh1 = {
    dbId: 22,
    email: "h@mail.com",
    userId: 112,
    startTrail: () => {
        return "hello world";
    },
    getCoupon: (name) => {
        return 10;
    },
    githubToken: "github/pr0thi"
};
// For multiple inheritance
// interface AdminPerson extends User1, User2{
//     role: "admin" | "ta" | "learner"
// }
