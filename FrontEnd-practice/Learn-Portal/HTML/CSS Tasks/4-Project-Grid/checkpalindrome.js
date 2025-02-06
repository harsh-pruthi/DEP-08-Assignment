let str = "abbacd";

let max = "";

function checkPalindrome(str){
    let arr = str.split('');
    let b = true;
    let i=0; 
    let j=str.length-1;
    while(i<=j){
        if(arr[i]!=arr[j]){
            b=false;
        }
        i++;
        j--;
    }
    return b;
}

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        let substr = str.substring(i, j);
        if (checkPalindrome(substr)) {
            if (substr.length > max.length) {
                max = substr;
            }
        }
    }
}

console.log(max);
console.log("Hello World");