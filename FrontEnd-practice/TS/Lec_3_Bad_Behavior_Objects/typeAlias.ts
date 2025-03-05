type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createUser(user: User): User{
    return {
        name:"", 
        email:"", 
        isActive:true
    }
}

createUser({
    name:"", 
    email:"", 
    isActive:true
});

//Function definition will look crazy that's why we need type (param1, param2, param3.....)

