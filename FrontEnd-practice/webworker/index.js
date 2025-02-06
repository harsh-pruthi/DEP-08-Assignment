
//create a web worker

const worker = new Worker('worker.js');



//Code 1 > 100 Paras 

const t0 = performance.now();


for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    document.body.appendChild(para);
}


const t1 = performance.now();

console.log(`Time taken to execute code 1 is ${t1-t0} milliseconds`);

//Code 2 

const t2 = performance.now();

let mydiv = document.createElement('div');

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t3 = performance.now();

console.log(`Time taken to execute code 2 is ${t3-t2} milliseconds`);

//Code 2 is faster than Code 1
//Why? 

let t4 = performance.now();

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    fragment.appendChild(para);
}
//1 reflow, 1 repaint 
document.body.appendChild(fragment);

let t5 = performance.now();

console.log(`Time taken to execute code 3 is ${t5-t4} milliseconds`);