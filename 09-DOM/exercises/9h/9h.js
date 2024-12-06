function keyUp(event) {
    // My resolution
    let div = document.querySelector('#js-typed-div');
    div.innerHTML += event.key;
    console.log(event.key)

    // Course resolution
    /*const inputElement = document.querySelector('#js-text-input');
    document.querySelector('#js-typed-div').innerHTML = inputElement.value;*/

    // OBS: Both had the same result (aparently)
}