/*
7A, 7B, 7C

function greet(name) {
    
    if (!name) {
        console.log('Hi there!');
    } else {
        console.log(`Hello! ${name}`);
    }
}

greet();

*/

//--------------------------------------------------------



/* 
7D, 7E

function convertToFahrenheit(celsius) {
    console.log((celsius * 9 / 5)  + 32)
}

//convertToFahrenheit(25)

function convertToCelsius(fahrenheit) {
    console.log((fahrenheit - 32) * 5 / 9)
}

//convertToCelsius(86)


// 7F
function convertTemperature(degrees, unit) {
    if (unit === 'celsius') {
        convertToFahrenheit(degrees)
    } else if (unit === 'fahrenheit') {
        convertToCelsius(degrees)
    }
}

convertTemperature(25,'celsius')
convertTemperature(86, 'fahrenheit')

*/

function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        return `${length / 1.6} miles`;
    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} km`
    } else if (from === to) {
        return `${length} ${to}`;
    }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'))