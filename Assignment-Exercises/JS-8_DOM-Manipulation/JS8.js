// your code starts here
document.addEventListener('DOMContentLoaded', function() {

    const counterText = document.querySelector('#counter-text');
    const increaseBtn = document.querySelector('#button-add');
    const decreaseBtn = document.querySelector('#button-subtract');

    let counter = 0;
    increaseBtn.onclick = () => {
        counter++;
        counterText.innerHTML = counter;
    }

    decreaseBtn.onclick = () => {
        counter--;
        counterText.innerHTML = counter;
    }
});

