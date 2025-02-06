let a = 4;
let b = 5;

function add(num1, num2){
    let total = num1 + num2;    
    return total;
}

function display(...param){
    return param;
}

const sum = add(a, b);

const result = display(1,2,3,4);

console.log(sum);
console.log(result);

