// Problem 1 .Inventory Price Update
// Description:
// You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.

const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

// 10% Discount Logic
const newPrices = products.map(item => {
    if (item.quantity > 100) {
        const originalPrice = item.price;
        item.price = item.price * 0.9;
        return { ...item, originalPrice };
    }
    return { ...item, originalPrice: item.price };
});
console.log(newPrices);

// Filter: Get products that received the discount
const discountedProducts = newPrices.filter(item => 
    item.price < item.originalPrice
);

// ForEach: Log discounted products
discountedProducts.forEach(item => {
    console.log(`${item.name} has a new price of $${item.price}`);
});

console.log("Products after discount", newPrices);
console.log("Discounted Products", discountedProducts);
