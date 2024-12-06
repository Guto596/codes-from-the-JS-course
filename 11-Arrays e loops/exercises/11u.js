/*
    Objective:
    The objective of this exercise is to fix a problem with 11t
    with .reverse() that doesn't create a copy of the array it is
    reversing.
*/

function removeEgg(foods) {
    let eggsRemoved = 0;
    
    // Here i'm making a copy of the foods array using foods.slice().
    const foodsCopy = foods.slice()
    const reversedFoods = foodsCopy.reverse();
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