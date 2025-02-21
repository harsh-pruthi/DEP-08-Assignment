// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


function findLargest(arr){
    for(let i=0; i<arr.length; i++){
        let flag = true;
        for(let j=i; j<arr.length; j++){
            if(arr[j]>arr[i]){
                flag=false;
                break;
            }
        }
        if(flag==true){
            return arr[i];
        }
    }
}

function findLargestOpt(arr){
    let result = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[result]){
            result = i;
        }
    }
    return arr[result];
}

let 

let arr = [10, 20, 5, 6, 40];

let result = findLargest(arr);
let opt = findLargestOpt(arr);
console.log(opt);
console.log(result);