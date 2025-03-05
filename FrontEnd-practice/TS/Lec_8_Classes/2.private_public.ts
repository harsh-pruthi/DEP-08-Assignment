class Uer{
    public email: string
    name:string
    private readonly city:string="Jaipur"
    constructor(email:string, name:string){
        this.email = email
        this.name = name
        this.city = "Delhi" //Here you can access
    }
}


//For some reason you don't want to access city outside the class -> Add Private keyword 
//By Default is Public -> public keyword (Not necessary to mark)

//Private and public is available in JS also
// #name will make it private There is no such thing as private in JS 

class Ur{
    private readonly city:string="Jaipur"
    constructor(public email:string, public name:string, private userID:string){
        this.email = email
        this.name = name
        this.city = "Delhi" //Here you can access
    }
}

//This is the same code -> But in production level we give it in this way,