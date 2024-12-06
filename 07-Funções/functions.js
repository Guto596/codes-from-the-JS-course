/*function function1() {
    alert('Hello, world!');
    alert(2 + 2);
}

function1();
*/

function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
}

calculateTax(2000, 0.2); // calculateTax(x) = Passar um valor para a função
calculateTax(5000); // 5000 = argumento