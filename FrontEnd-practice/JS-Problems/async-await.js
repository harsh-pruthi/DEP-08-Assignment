const p = new Promise((resolve, reject)=>resolve("Promise data"));


function fetchData(){
    const data = p.then((data)=>console.log(data));
    console.log("Fetch data  blocl")

}

fetchData();

async function getData(){
    console.log(await p);
}

getData();


