let strings = ['hello', 'world', 'search', 'good'];

let index = -1;

for (let i = 0; i < strings.length; i++) {
    if (strings[i] === 'search') {
        index = i;
    }
}

console.log(index);