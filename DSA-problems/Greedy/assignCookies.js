const greed = [10,9,8,7];
const cookie = [5,6,7,8];

greed.sort((a,b)=>a-b);
cookie.sort((a,b)=>a-b);

console.log(cookie,greed);

let greedPtr = 0; 
let cookiePtr = 0;
let result = 0;

while(greedPtr<greed.length && cookiePtr<cookie.length){
    
    
    if(cookie[cookiePtr]>=greed[greedPtr]){
        
        cookiePtr++;
        greedPtr++;
        result++;
    }else{
    cookiePtr++;
    }
}

console.log(result);

