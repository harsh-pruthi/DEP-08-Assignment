// class UserPerson{
//     constructor(email, name){
//         this.email = email;
//         this.name=name
//     }
// }
//This was JS


//You have to make TS know email in advance or else it will give error that property email is not defined on type

class UserPerson{
    email: string   
    name: string
    city: string=""   //Needs an init always, you are not passing that but can access
    readonly country: string="India"
    constructor(email:string, name:string){
        this.email = email;
        this.name=name;
    }
}

const hiteshC = new UserPerson("h@h.com","Harsh");

// hiteshC.city = 2; //Prevents

// hitesh.county = "Ban" ReadOnly 

