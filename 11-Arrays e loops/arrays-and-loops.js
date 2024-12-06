/*
const myArray = [
    10,
    20,
    30
];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

[1, 'hello', true, { name: 'socks' } [1, 2]]

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);

*/

/*
let i = 1;

while (i <= 5) {
    console.log(i);
    i++
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
    randomNumber = Math.random();
}

console.log(randomNumber);
*/

/*
const todoList = ['make dinner', 'wash dishes', 'watch youtube']

for(let i = 0; i <= todoList.length - 1; i++) {
    const value = todoList[i];
    console.log(value);
}
*/

/*
const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}
console.log(total);


const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}
console.log(numsDoubled)
*/


/*
// As variáveis que guardam arrays apenas guardam uma referência
// para o local na memória do computador onde está localizado o
// array, assim como os objetos
const array1 = [1, 2, 3];

// "array2 = array1" faz uma cópia da referência do array 1
// porém se você adiciona .slice() será feita uma cópia dos VALORES
// de dentro do array, não a referência.
const array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);


// Isso é um atalho para pegar vários elementos de dentro de um
// array e colocar dentro de variáveis, assim você não precisa
// ficar declarando diversas variáveis em várias linhas.
// Nesse caso: firstValue = 11; secondValue = 2; thirdValue = 3
const [firstValue, secondValue, thirdValue] = [1, 2, 3];


for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        // Continue irá pular uma etapa do loop, ou seja, nesse caso
        // ele vai pular o 3.
        continue;
    }
    console.log(i);
    if (i === 8) {
        // Break irá parar o loop antes de chegar em 10.
        break;
    }
}

let i = 1;

while (i <= 10) {
    i++
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
*/

function doubleArray(nums) {

    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            // Para o loop caso algum número do array for 0.
            return numsDoubled;
        }
        numsDoubled.push(num * 2);
    }
    return numsDoubled;

}

console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 5]));