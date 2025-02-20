const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer",
    hasPets: true
};


for(let key in person){
    console.log(`Property ${key} Value ${person[key]}`);
}


let arr = [1,2,3,4,5];

let modifiedArr = [];

for(let i=0; i<arr.length; i++){
    modifiedArr.push(arr[i]*3);
}

console.log(arr);

console.log("Original Array", arr);
console.log("Modified Array", modifiedArr);

let num = null;
let flag = true;
do{
    num = prompt("Enter a number greater than zero");
    if(num>0){
        flag = false;
    }
    else{
        console.log("Please enter a number greater than zero")
    }
}while(flag);

console.log(`Thank you your number is: ${num}`);


