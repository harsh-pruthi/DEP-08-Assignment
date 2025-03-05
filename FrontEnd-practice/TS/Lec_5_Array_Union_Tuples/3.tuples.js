"use strict";
//Only available in TS
const users = ['hc'];
//say we want a string, a number, a boolean in a precise order 
const user = [1, 'hc'];
//there is no restriction, you can keep number or string anything first 
//but there are cases say API data, id position -> Convert in tuple
let usr;
usr = ["HC", 123, true];
//follows the pattern and you cannot reverse it 
//Tuple is there to make sure that the order matters as well as the qty 
//Another case 
let rgb = [255, 123, 112];
const neUser = [112, "hello@mail.com",];
// neUser[1] = 1;
neUser[1] = "s@mail"; //you can change the values at the right position with the right data type 
//neUser.push(true); //you cannot use it as you haven't defined or you can push into an empty array
neUser.pop(); //you can use other methods though which is weird
