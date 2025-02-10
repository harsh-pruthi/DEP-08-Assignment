orders = ["Large Margherita", "Small Margherita", "Small Margherita", "Large Pepperoni", "Small Pepperoni", "Small A"]

let small = [], large = []
for (i of orders){
    if(i[0] == "S"){
        small.push(i)
    }
    else{
        large.push(i)
    }
}
output = []
flag = false
min = new Set(small)
s = [...min]
for (i of s){
    sname = i.split(" ")
    for(j of large){
        lname = j.split(" ")
        output.push(j)
        if(flag){
            continue
        }
        if(sname[1] == lname[1]){
            output.push(i)
            flag = true
        }
    }
    if(flag){
        break
    }
}
console.log(output)