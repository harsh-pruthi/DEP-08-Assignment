"use strict";
//Say you are using MongoDB, no body should be able to touch _id
//mark it as readonly
//optional fields using ?
let myUser = {
    _id: "1234",
    name: "harsh",
    email: "h@h.com",
    isActive: true
};
myUser.email = "my@gmail.com";
//Combining 
