function minMax(nums) {
    const object = {
        min: nums[0],
        max: nums[0]
    };

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        if (value < object.min) {
            object.min = value;
        }

        if (value > object.max) {
            object.max = value;
        }
    }

    return object;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));