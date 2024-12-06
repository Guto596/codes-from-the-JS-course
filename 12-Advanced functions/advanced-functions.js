/*
function greeting() {
    console.log('Hello, World!');
}

greeting();

const num = 2;
// A função pode ser acessada através do nome da variável, logo o
// nome da função não é necessário.
// Essa função abaixo é uma "anonymous function", pois não possui
// nome.
const function1 = function() {
    console.log('Hello, World!2');
};

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
    num: 2,
    fun: function() {
        console.log('Hello, World!3')
    }
};

object1.fun();

function display(param) {
    console.log(param);
}
// "Passing a value to a function"
display(2);

function run(param) {
    param();
}
// "Passing a function into another function"
run(function() { // Esse tipo de função se chama Callback function.
    console.log('Hello, World!4');
});
*/

/*
setTimeout(function() {
    console.log('timeout');
    console.log('timeout2');
}, 3000);

console.log('next line');

setInterval(function() {
    console.log('interval');
}, 3000);

console.log('next line 2');
*/

[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value, index) {
    if (value === 'wash dishes') {
        return;
    }
    console.log(value);
    console.log(index);
})