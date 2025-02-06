let str = ["xyz","zxy","cba","bca","acb"];

let result = [];

let flag = true;
for(let i=0; i<str[0].length; i++){
   for(let j=0; j<str.length; j++){
    for(let k=j+1; k<str.length; k++){
        if(str[j][i]==str[k][i] && flag){
            result.push(j);
            result.push(k);
            result.push(i);
            flag=false;
            break;
        }
    }
   }
}


console.log(result);

