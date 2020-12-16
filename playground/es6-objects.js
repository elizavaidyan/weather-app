//Object Shorthand property

const name = 'Angel';
const userAge = 27;

const user = {
    name,   //shorthand syntax
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);

//Object destructuring

const product = {
    label: 'Red Notebook',
    price:3,
    stock:201,
    salePrice: undefined,
    //rating:4.2

}

// const label = product.label;
// const stock = product.stock;

/* const {label:productLabel, stock, rating = 5} = product

console.log(productLabel, stock, rating); */

const transaction = (type, {label, stock}) => {  //destructuring with func arguments

    console.log(type);
    console.log(label);
    console.log(stock);
    
}

transaction('order', product);