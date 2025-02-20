// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 data")
//     }, 3000);
// })

// async function getData(){
//     console.log("Hello World");
//     const data = await p1;
//     console.log(data);
// }

//CASE 2 (When p1=p2), CASE 3(p1>p2) and CASE 4(p1=p2)
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 data")
    }, 1000);
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 data")
    }, 3000);
})


async function getData(){
    console.log("Hello World");
    const data1 = await p1;
    console.log(data1);
    const data2 = await p2;
    console.log(data2);
}


getData();