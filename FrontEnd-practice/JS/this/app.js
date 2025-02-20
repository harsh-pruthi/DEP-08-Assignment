function x(){
    console.log("In X");
    console.log(this);
    function y(){
        console.log("In Y");
        console.log(this);
        let a = 10;
        function z(){
            console.log("In Z");
            console.log(this);
            const l = () => {
                console.log("In L");
                console.log(this);
                
            }
            l();
        }
        z();
    }
    
    return y;
}

let z = x();
z();


let a = {
    x: function(){
        console.log("In object")
        console.log(this);
    },
    z: function(){
        let y = () => {
            console.log("In arrow")
            console.log(this);
        }
        y();
    }

}

a.x(); // window object
a.z();// window object