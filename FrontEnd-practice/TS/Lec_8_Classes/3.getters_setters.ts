class Uar{

    private courseCount = 1

    private readonly city:string="Jaipur"
    constructor(public email:string, public name:string, private userID:string){
        this.email = email
        this.name = name
        this.city = "Delhi" //Here you can access
    }
    
    //Make a getter of email
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    //setter 
    get cCount():number{
        return this.courseCount;
    }

    //We can't make a setter a void (INTERVIEW PROBLEM). '
    //Setter cannot have any datatype
    // set cCount():void{

    // }
    set cCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course Count should be more than one")
        }
        this.courseCount = courseNum;
    }

    //There can be private methods as well
    private deleteToken(){
        console.log("Token Deleted")
    }
}

//Can't access deleteToken() outside, can be accessed inside 
