//discriminated unions 

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

//.kind of square and .kind of circle can be checked

interface Rectangle{
    kind: "rectangle"
    length: number 
    width: number
}

//Use kind keyword wherever possible 

type Shape  = Circle|Square;

function getTrueShape(figure: Shape){
    if(figure.kind==="circle"){
        return Math.PI*figure.radius;
    }
    return figure.side*4;
}

//exhaustive shape
function getArea(figure: Shape){
    switch(figure.kind){
        case "circle":
            return Math.PI
        case "square":
            return 
    }
}

//Say now you add rectangle introduced later 
// we should have a default case say if you have'nt introduced method for Rectangle which is present in shape but not in method so it'll prompt you to add case"rectangle".

// default:
//     const defaultforShape: never = shape
//     return defaultforShape

