function arraySwap(array) {
    const firstIndex = 0;
    const lastIndex = array.length - 1

    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}

console.log(arraySwap(['hi', 'hello', 'good']));