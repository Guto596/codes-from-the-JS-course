function subscribeButton() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculate() {
    let num = parseFloat(document.querySelector('.js-cost-input').value);
    let paragraph = document.querySelector('.js-result-p');

    if (num < 0) {
        if (!paragraph.classList.contains('error-message')) {
            paragraph.classList.add('error-message');
        }
        paragraph.innerHTML = `Error: cost cannot be less than $0`;
    } else if (num < 40) {
        if (paragraph.classList.contains('error-message')) {
            paragraph.classList.remove('error-message');
        }
        num += 10;
        paragraph.innerHTML = `$${num}`;
    } else if (num >= 40) {
        if (paragraph.classList.contains('error-message')) {
            paragraph.classList.remove('error-message');
        }
        paragraph.innerHTML = `$${num}`;
    }
    
    document.querySelector('.js-cost-input').value = '';
}

function keyDown(event) {
    console.log(event.key);
    if(event.key === 'Enter') {
        calculate();
        document.querySelector('.js-cost-input').value = '';
    }
}