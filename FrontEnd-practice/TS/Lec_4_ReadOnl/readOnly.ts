type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditDetails? : number
}

//Say you are using MongoDB, no body should be able to touch _id
//mark it as readonly
//optional fields using ?

let myUser: User1 = {
    _id: "1234", 
    name: "harsh", 
    email: "h@h.com", 
    isActive: true
};

myUser.email = "my@gmail.com"

// myUser._id = "123"; //ReadOnly Error

//What if id was an array, can we push it in array?

//Mix and match of types 
type cardNumber = {
    cardNumber: string

}

type cardDate={
    cardDate: string
}


 

//Mix and match 
// type cardDetails = cardNumber & cardDate;    .//this is a usecase

//adding cvv
type cardDetails = cardNumber & cardDate & {
    cvv:number
};

//Combining 