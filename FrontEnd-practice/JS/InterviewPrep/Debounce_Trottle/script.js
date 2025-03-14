const btn = document.getElementById('btn');
const clickT = document.getElementById('clicked');
const triggT = document.getElementById('triggered');

let clicked = 0;
let trigg = 0;

const debounced = _.debounce(()=>{
    return triggT.innerHTML = trigg++;
},300)
const throll = _.throttle(()=>{
    return triggT.innerHTML = trigg++;
},800)

function clicke(){

    clickT.innerHTML = clicked++;
    throll();
}

console.log(btn);

btn.addEventListener('click', clicke)
