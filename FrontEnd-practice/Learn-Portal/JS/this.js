let arr = [1,2,3];

arr.forEach(function(){
    console.log(this);
})


let Person = {
    ages: [123,43],
    transform: function(){
        this.ages.forEach(()=>{
            console.log(this);
        })
    }
}

let Person1 = {
    ages: [123,43],
    transform: function(){
        this.ages.forEach(function(){
            console.log(this);
        })
    }
}


Person1.transform;


let user = {
    name: "u1", 
    age: 12,
    showName: function(){
        console.log(this.name);
        function showAge(){ 
            console.log(this.age);  //undefined 
        }
        showAge();
    }
};

user.showName;



//arrow function 

let v = this;

v.age

