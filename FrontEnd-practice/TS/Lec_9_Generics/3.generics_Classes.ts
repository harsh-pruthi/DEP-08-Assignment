// function anotherFunc<T,U>(val1: T,val2: U):object{
//     return {
//         val1, val2
//     }
// }

// anotherFunc(2,"4");

function anotherFunc<T,U extends number>(val1: T,val2: U):object{
    return {
        val1, val2
    }
}

// anotherFunc(2,"4"); type safety 
anotherFunc(2,3);


interface Database{
    connection: string, 
    userName: string, 
    passWord: string 

}

function anotherFuc<T,U extends Database>(val1: T,val2: U):object{
    return {
        val1, val2
    }
}

//Class types in Generics 
//sell courses and quizes 

interface Quiz{
    name: string,
    type: string 

}

interface Course{
    name: string, 
    author: string, 
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product:T){
        this.cart.push(product);
    }
}   