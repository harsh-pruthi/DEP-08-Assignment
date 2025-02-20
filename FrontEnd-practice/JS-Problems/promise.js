
let cart = ['h','a'];

const promise = createOrder(cart);

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!cart.length==0){
            const err = new Error("Cart is empty")
            reject(err);
        }
        const orderId = "123";
        resolve(orderId);
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        return resolve(console.log("Payment Successful", orderId));
    })
}

promise
.then(function(orderId){
    console.log(orderId);
    return proceedToPayment(orderId);
}).catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})


//createOrder, proceedToPayment, showOrderSummary, updateWallet


