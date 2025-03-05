//makes reusable function,array 
//even array is generic 

const scre: Array<number> = [1,2,3];

const nme: Array<string> = ["f","fajh"];


//either a number or a bool
function identityOne(val: boolean|number):boolean|number{
    return val; //either a number or bool
}
//say introduce a string how many | you can use 

function identityTwo(val:any):any{
    return val;
}
//Problem is same. and using any is ugly

//FIX
function identityThree<Type>(val:Type): Type{
    return val;
}

//any could be anything but in generics almost like any ready to accept anything but value type is locked 
//Provide number -> Return type will strictly become number

identityThree(3);   //number as input, number as output
identityThree('3'); //string as input, string as output

//Shorter way same functionality, you can use any letter as well
function identityFour <T>(val:T): T{
    return val;
}
//you can define your own type as well

interface Bottle{
    brand: string, 
    type: number
}

function identityFive <Bottle>(val: Bottle): Bottle{
    return val;
}
//why need of generics in custom interface when you can write (val:Bottle):Bottle 

