/*
    Objective:
    Modify 11r exercise to only remove the first 2 eggs from the
    array.
*/

function removeEgg(foods) {
    let eggsRemoved = 0
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
        }
        console.log(foods[i]);
    }
}

//removeEgg(['banana', 'meat', 'egg', 'apple']);
removeEgg(['meat', 'apple', 'banana', 'egg', 'egg', 'egg', 'egg']);