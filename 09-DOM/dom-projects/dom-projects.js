function subscribeButton() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
    } else {
        buttonElement.innerText = 'Subscribe';
    }
}

function calculate() {
    let num = parseFloat(document.querySelector('.js-cost-input').value);

    if (num < 40) {
        num += 10;
    }
    document.querySelector('.js-result-p').innerHTML = `$${num}`;
    document.querySelector('.js-cost-input').value = '';
}

function keyDown(event) {
    console.log(event.key);
    if(event.key === 'Enter') {
        calculate();
        document.querySelector('.js-cost-input').value = '';
    }
}