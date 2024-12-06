// 8a
const product = {
    name: 'basketball',
    price: 2095
};

console.log(product);

// 8b
product.price += 500;

console.log(product);

// 8c
product['delivery-time'] = '3 days';
console.log(product);

// ------------------------

// 8d
const product1 = {
    name: 'bola',
    price: 100
};

const product2 = {
    name: 'camisa',
    price: 150
};

function comparePrice(product1, product2) {
    if (product1.price < product2.price) {
        return 'Produto 1 é mais barato';
    } else if (product2.price < product1.price) {
        return 'Produto 2 é mais barato';
    }
}

console.log(comparePrice(product1, product2));

// ---------------------------------

// 8e (usa o produto2 de 8d)

const product3 = {
    name: 'camisa',
    price: 150
}

function isSameProduct(product1, product2) {
    if (product1.price === product2.price && product1.name === product2.name) {
        return 'É o mesmo produto.';
    } else if (product1.price !== product2.price || product1.name !== product2.name) {
        return 'Produto diferente';
    }
}
console.log(isSameProduct(product2, product3));

// 8f
console.log('Good Morning'.toLowerCase());

// 8g
console.log('test'.repeat(2));