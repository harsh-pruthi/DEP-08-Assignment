// function foo<Type>(arg: Type): Type{
//     return arg.length;
// }

function foo<Type>(arg:Type[]):Type{
    console.log(arg.length);
    return arg[0]
}

function getSearchProduct<T>(products: T[]):T{
    //one of the value from that array
    return products[3]
}


function goo<T>(products: T[]):T{
    //one of the value from that array
    const myIndex = 3
    return products[myIndex]
}
// ():type of return
const getMoreSearchProducts = <T>(products: T[]):T =>{
    //DB Ops
    const myIndex = 4;
    return products[myIndex];
}

// <T,> Sometimes people use , to differentiate between generics and comma
