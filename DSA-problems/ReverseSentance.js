

let a = "A man, a plan, a canal: Panama";

console.log(a.split(" ").join(""));


a.split(" ").filter(char=>(char>='a' && char>='z')).join("");

console.log(a);

let c = "A man, a plan, a canal: Panama";
let d = a.split('').filter(char => char !== ' ' && char !== ',' && char !== ':').join('');
console.log(d); // Output: "AmanaplanacanalPanama"

console.log(d.toLowerCase()===d.toLowerCase().split('').reverse().join(''));

let x = "abc";
console.log(x.split('').reverse().join(''));