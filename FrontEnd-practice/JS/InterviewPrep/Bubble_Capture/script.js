function calcSquare(){
    let arr = [];
    for(let i=0; i<100000; i++){
        arr.push(i*i);
    }
    console.log(this);
    return function(param){
        
        console.log(this);
        return arr[param];
    }
    

}

let fn = calcSquare();



console.log(fn(57892));
