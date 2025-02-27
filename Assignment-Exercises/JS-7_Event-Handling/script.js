document.querySelector('#colorButton').addEventListener('click', () => {
    let colors = [
        "red", "orange", "yellow", "green", "blue", "indigo", "violet"
    ]

    let index = Math.floor(Math.random(colors) * 10);
    document.querySelector('body').style.backgroundColor = colors[index];
});