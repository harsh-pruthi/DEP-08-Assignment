// function imp(cb){
//      setTimeout(()=>{
//         cb("Hello");
//     },1000);
// }

// const msg = imp((arg)=>{
//     console.log(arg);
// })


// console.log("Stop");
// console.log(msg);

function imp(){
    return Promise.resolve(setTimeout(()=>{
        console.log("Hello World");
    },100));
}


function imp2(){
    return Promise.reject(setTimeout(()=>{
        console.log("Hello World");
    },1000));
}


function imp3(){
    return Promise.reject(setTimeout(()=>{
        console.log("Hello World");
    },500));
}

Promise.all([
    imp(), 
    imp2(), 
    imp3()
]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})