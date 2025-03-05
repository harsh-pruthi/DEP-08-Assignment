const superHeroes = []

superHeroes.push("spiderman");

//In older version, superHeroes was never type 

const superHeroPower: number[] = [];
superHeroPower.push(2);

const geroPower: Array<number> = [];    //Another way of declaration

type People = {
    name: string, 
    isActive: boolean
}

const allPeople: People[] = [];

//whatever you wish to push, add datatype which follows people

//Empty objects are not allowed

allPeople.push({
    name: "Harsh", 
    isActive: true
})

//One More Way
const MLModels : number[][] = [
    [255, 255, 255], 
    [255, 255, 255]
];

//array of arrays 2D

//Read about ReadOnlyArray 

