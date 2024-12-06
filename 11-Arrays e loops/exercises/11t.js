/*
    Objective:
    Modify the 11r exercise to remove the last 2 eggs from the array
    using the method .reverse().
*/

function removeEgg(foods) {
    let eggsRemoved = 0;
    
    const reversedFoods = foods.reverse();
    const result = [];

    for (let i = 0; i < reversedFoods.length; i++) {
        if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            
            continue;
        }
        result.push(reversedFoods[i]);
    }
    return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));