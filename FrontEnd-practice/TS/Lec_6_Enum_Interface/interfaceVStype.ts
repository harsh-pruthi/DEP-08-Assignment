//You can extend it and reopen it, make sure you don't have same name of interface and module 
//Read from tslang doc as well

interface NewUser {
    readonly dbId: number
    email: string, 
    userId: number,
    googleId?: string,
    // startTrial: () => string this is also working but 
    startTrail() : string //better way 
    getCoupon(couponName:string) : number
}

// say you want to introduce a github sign in 
interface NewUser{
    githubToken: string
}

//Writing a new interface is fine -> This is called ReOpening of the interface

// Add in property 
const har1: NewUser = {
    dbId: 22,
    email: "h@mail.com",
    userId: 112,
    startTrail: ()=>{
        return "hello world"
    },
    getCoupon: (name:"hitesh")=>{
        return 10
    },
    githubToken: "github/pr0thi"
}

//Inheritence
// Admin gets all properties of User1 
interface AdminPerson extends User1{
    role: "admin" | "ta" | "learner"
}

// For multiple inheritance
// interface AdminPerson extends User1, User2{
//     role: "admin" | "ta" | "learner"
// }

