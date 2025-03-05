// typeof 1 
// 'number'
// PROBLEM CASES:
// typeof [1,2,3]
// 'object'
// typeof ""   //empty string
// 'string'
// typeof null
// 'object'

function detectType(value: number|string){
    // return value.toLowerCase(); could be a number could be a string 

    if(typeof value==='string'){
        return value.toLowerCase()
    }
    return value+3;

}

//what about case when it might be number[]. you won't be checking for each and every thing 

//When you use typeof -> It's called TYPE GUARD 

function provideID(id: string|null){
   if(!id){
        console.log("Please provide id")
        return
   }
   //db op
   return id.toLowerCase()
}

function printAll(strs: string| string[]| null){
    if(strs){
        if(typeof strs === 'object'){
            for(const s of strs){
                console.log(s)
            }

        }
        else if(typeof strs==='string'){
            console.log(strs);
        }
    }
}

