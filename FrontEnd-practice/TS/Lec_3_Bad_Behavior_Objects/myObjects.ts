const User = {
    name: "Harsh", 
    email: "hitesh@lco.dev", 
    isActive: true
}

// Use Case of the object -> Passing and returing from functions 

function createUser({name:string, isPaid: boolean}){


}

// createUser({
//     name: "Hitesh", 
//     isPaid: false, 
//     email: "h@h.com"
// });  //Error

let newUser = {
    name: "Hitesh", 
    isPaid: false, 
    email: "h@h.com"
};
createUser(newUser);

//Return an object with the two defined Properties 
function createCourse():{name: string, price:number}{
    return {
        name:"reactJs", 
        price:300
    }
}


