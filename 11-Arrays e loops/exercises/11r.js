/*
    Objective:
    Create a function with a parameter "foods" that will be an array
    and "console.log()" it, but skipping the "egg" string.
*/
function removeEgg(foods) {
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        }
        console.log(foods[i]);
    }
}

removeEgg(['banana', 'meat', 'egg', 'apple']);
removeEgg(['meat', 'apple', 'banana', 'egg', 'egg']);