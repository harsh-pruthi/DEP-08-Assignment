//instanceof Narrowing 

//anything which uses new keyword => Only used when we have new keyword 

//instanceof checks if it was instance of class 

function logVal(x:Date|string){
    if(x instanceof Date){


    }
}


type fish = {
    swim: ()=>void;
}
type bird = {
    fly: ()=>void;
}

function isFish(pet: fish| bird){
    //should return true or false
    return (pet as fish).swim !== undefined;
}

// function isFish(pet: fish| bird):pet is fish{
//     //should return true or false
//     return (pet as fish).swim !== undefined;
// }

function getFood(pet: fish|bird){
    if(isFish(pet)){
        //Identified truly as fish or bird but type is not being 
        return "Fish Food"
    }
    return "Bird Food"
}