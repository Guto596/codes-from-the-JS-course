function buttonToggle(choice) {
    turnOffPreviousButton();
    if (choice === 'gaming') {
        const button = document.querySelector('.js-gaming-button');
        if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
        } else {
            button.classList.remove('is-toggled');
        }
    } else if (choice === 'music') {
        const button = document.querySelector('.js-music-button');
        if (!button.classList.contains('is-toggled')) {
            button.classList.add('is-toggled');
        } else {
            button.classList.remove('is-toggled');
        }
    } else if (choice === 'tech') {
        const button = document.querySelector('.js-tech-button');
        if (!button.classList.contains('is-toggled')) {
            button.classList.add('is-toggled');
        } else {
            button.classList.remove('is-toggled');
        }
    }
    
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}

