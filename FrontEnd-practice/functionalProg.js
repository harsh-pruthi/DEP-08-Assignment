

let nums = [1,3,4,4,5];

function cicleArea(radius){
    return Math.PI*radius*radius;
}


const calculateArea = function(nums, logic){
    let result = [];
    for(let i of nums){
        result.push(logic(i));
    }
    return result;
}

console.log(calculateArea(nums, cicleArea));




//const result = users.filter((x)=>x.age<30).map((x)=>x.firstname);

const users = [{firstName:"akshay", lastName:"saini", age:26},
    {firstName:"akshay", lastName:"saini", age:26},
    {firstName:"harsh", lastName:"saini", age:40}]

const result = users.reduce(function(acc, curr){
    if(curr.age<30){
        acc.push(curr.firstName)
    }
}, []);
console.log(result);