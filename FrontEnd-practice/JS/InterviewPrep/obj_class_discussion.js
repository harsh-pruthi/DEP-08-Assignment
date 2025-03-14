// function count(){
//     let x = 0;
//     return function increase(){
//         x++;
//         console.log(x);
//     }
// }

// let a = count();
// a();

// // const user = {
// //     name:"harsh", 
// //     logMsg(){
// //         console.log(this.name);
// //     }
// // }

// // setTimeout(function(){
// //     user.logMsg()
// // }, 1000)

// // console.log("here")
// // console.log(user.logMsg)

// // console.log("Final")
// // user.logMsg()


// function abc(emp, shw){
//     this.emp = emp;
//     this.show = shw;
// }

// let a = new abc('ha','fa');

// function def(dept){
//     abc.call(this, 'ha', 'f');
//     this.dept = dept;
// }

// def.prototype = Object.create(abc.prototype)

// let b = new def('swe');
// console.log(b);

// console.log(b.constructor) //why pointing to abc if it's pointing to def 
//     //fix the bug 

// //reassign the constructor again 
// def.prototype.




let name = 'Ankur';
 
let obj = {
    name: "Harsh",
    meth: ()=>{
        console.log(this.name)
        function abc(){
            function dbc(){
                console.log(this.name);
            }
            dbc();
        }
        abc();
    }
}
 
obj.meth();
 
let abc = {
    length: 2,
    meth: function(){
        console.log(this.length);
        function inx(){
            console.log(this.length);
        }
        this.inx();
    }
}
abc.meth();

function abc(){
    function cde(){

    }
}

let obj = {
    name: "Harsh",
    meth: ()=>{
        function abc(){
            function dbc(){
                console.log(this.name);
                console.log(this.name1);
            }
            dbc();
        }
        abc();
    }
}

let name = 'Ankur';
var name1 = 'Rohit';
obj.meth()