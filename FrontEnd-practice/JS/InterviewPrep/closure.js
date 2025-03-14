
function doSomething(param){
    return function par(x){
        console.log(x+param);
    }
}

const fn = doSomething(100);

fn(200);    //200
fn(400);    //400