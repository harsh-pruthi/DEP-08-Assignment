//the in operator narrowing 

//whether property is present or not 

interface UserI{
    name: string, 
    email: string
}

interface AdminI{
    name: string, 
    email: string, 
    isAdmin: boolean
}

function isAdminAccount(account: UserI|AdminI){
    // return account.isAdmin isAdmin doesn't exist on useri

    if("isAdmin" in account){   //to make sure it's 100% admini
        return account.isAdmin  //return true/false
    }
}

