//Identical to types 

// you're creating a new user -> email, phoneno, discount code etc.

interface NewUser {
    readonly dbId: number
    email: string, 
    userId: number,
    googleId?: string,
    // startTrial: () => string this is also working but 
    startTrail() : string //better way 
    getCoupon(couponName:string) : number
}

// Broad/Superficial view of class 

const harsh1: NewUser = {
    dbId: 22,
    email: "h@mail.com",
    userId: 112,
    startTrail: ()=>{
        return "hello world"
    },
    getCoupon: (name:"hitesh")=>{
        return 10
    }
    
}

harsh1.email = "Harsh@hp.com";

// harsh.dbId = 22 //Not allowed


