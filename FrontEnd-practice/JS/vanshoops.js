// // class Person{
// //     constructor(name){
// //         this.name = name
// //     }
// //     display(){
// //         console.log(this.name)
// //     }
// // }

// // class Male extends Person,{
    
// // }

// // let per1 = new Person('jon')
// // per1.display()


// function Person1(name){
//     this.name = name
// }


// function Person2(name,age){
//     this.name = name
//     this.age = age
// }

// function Person3(name,age){
//     Person2.call(this,name,age)
// }

// Person3.prototype = Object.create(Person2.prototype)
// Person3.prototype.constructor = Person3

// // Person1.prototype.display = function(){
// //     console.log(this.name)
// // }

// Object.prototype.display = function(){
//     console.log(this.name)
// }

// let per2 = new Person1('alice')
// let per3 = new Person3('jon',21)

// per2.display()
// per3.display()

Object.prototype.lengths = function(){
    console.log('hi')
}

let arr = [1,2,3]
let s = 'hello'
function a(){
    let arr = [1,2,3]
    let s = 'hello'
    return 12
}
// a.length()
console.log(arr.lengths())
// s.findLength()