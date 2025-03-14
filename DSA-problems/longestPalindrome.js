let str = "abbacd";

let strings = str.split('');
console.log(strings);

for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length+1; j++ ){
        console.log(str.slice(i, j));
    }
}