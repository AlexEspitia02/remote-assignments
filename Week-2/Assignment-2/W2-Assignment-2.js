function avg(data) {
    // your code here
    let totalPrice=data.products.reduce((total,prices)=>{
        total+=prices.price;
        return total;
    },0)
    let average=totalPrice/data.products.length;
    return average;
    }
    console.log(
    avg({
    size: 3,
    products: [
    {
    name: 'Product 1',
    price: 100,
    },
    {
    name: 'Product 2',
    price: 700,
    },
    {
    name: 'Product 3',
    price: 250,
    },
    ],
    })
    ); // should print the average price of all products