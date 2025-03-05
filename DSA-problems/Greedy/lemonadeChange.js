
var lemonadeChange = function(bills) {
    let satisfy = true;
    let five = 0;
    let ten = 0;

    let mp = new Map();

    for(let i of bills){
        
        if(i==5){
            console.log("Five Added");
            mp.set(5, mp.get(5)==undefined?1:mp.get(5)+1);
   
        }
        else if(i==10){
            if(mp.get(5)>0){
                console.log("Ten Added")
                mp.set(10, mp.get(10)==undefined?1:mp.get(10)+1);
                mp.set(5, mp.get(5)-1);
                
                
            }else{
                satisfy = false;
            }
        }
        else{
            console.log("inside 20")
            if(mp.get(5)>0&mp.get(10)>0){
                mp.set(5, mp.get(5)-1);
                mp.set(10, mp.get(10)-1);
                console.log("In here, map condition", mp);
            }
            else if(mp.get(5)>=3){
                mp.set(5, mp.get(i)-3);
            }
            else{
                satisfy = false;
            }
        }
    }
    console.log(mp);
    
    return satisfy;

    

};


console.log(lemonadeChange([5,5,5,10,20]));

