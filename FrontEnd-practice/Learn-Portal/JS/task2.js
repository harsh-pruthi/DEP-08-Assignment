
async function fetchData(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await data.json();
        const values = [];

        // for(let i of response){
        //     values.push({
        //         name: i.name, 
        //         email: i.email, 
        //         city: i.address.city
        //     });
        // }

        const ans = response.map((i)=>{return [i.name+" "+i.email+" "+i.address.city]});

        console.log(ans)
    }
    catch(error){
        console.log("Error fetching the data")
    }
}

fetchData();
