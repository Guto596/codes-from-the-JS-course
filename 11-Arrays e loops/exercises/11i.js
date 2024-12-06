function addNum(array, num) {
    const result = [];

    for (i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }

    return result;
}

console.log(addNum([1, 2, 3], 2));