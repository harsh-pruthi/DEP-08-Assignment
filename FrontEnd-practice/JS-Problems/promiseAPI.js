const p1 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("P1 Success"), 3000);
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>reject("P2 Fail"), 1000);
})
const p3 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("P3 Success"), 2000);
})

Promise.all([p1, p2, p3])
    .then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))

Promise.allSettled([p1, p2, p3]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))

Promise.race([p1, p2, p3]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))

Promise.any([p1, p2, p3]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))


const prom = calcOut();

function calcOut(){
    const x = new Promise(function(resolve, reject){
        let flag = true;
        if(flag){
            resolve("Hello");
        }
    })
    return x;
}

prom.then(function(value){
    console.log(value);
})