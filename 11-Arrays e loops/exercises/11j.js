function addNum(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length || i < array2.length; i++) {
        let val1 = array1[i] !== undefined ? array1[i] : 0;
        let val2 = array2[i] !== undefined ? array2[i] : 0;
        result.push(val1 + val2)
    }
    return result;
}

console.log(addNum([1, 1, 2], [1, 1, 3]));