document.addEventListener('DOMContentLoaded', function() {
    // Get all important id
    const wins = document.querySelector('#wins');
    const losses = document.querySelector('#losses');
    const ties = document.querySelector('#ties');
    
    // Counters
    let winsCounter = 0;
    let lossesCounter = 0;
    let tiesCounter = 0;

    // Get user choice and computer choice
    let userChoice = '';
    let computerChoice = '';

    // Onclick functions
    document.querySelector('#rock').onclick = () => {
        userChoice = 'rock';
        computerChoice = generateComputerChoice();
        determineWinner();
        displayScores();
    }
    document.querySelector('#paper').onclick = () => {
        userChoice = 'paper';
        computerChoice = generateComputerChoice();
        determineWinner();
        displayScores();
    }
    document.querySelector('#scissors').onclick = () => {
        userChoice = 'scissors';
        computerChoice = generateComputerChoice();
        determineWinner();
        displayScores();
    }

    document.querySelector('#resetButton').onclick = () => {
        winsCounter = 0;
        lossesCounter = 0;
        tiesCounter = 0;

        document.querySelector('.choices').style.display = "none";
        document.querySelector('#resetButton').disabled = true;
        document.querySelector('#startButton').disabled = false;

        displayScores();
        document.querySelector('#result').innerHTML = 'Choose your weapon!';
        displayImageChoice();
    }
    
    document.querySelector('#startButton').onclick = () => {
        document.querySelector('.choices').style.display = "flex";
        document.querySelector('#startButton').disabled = true;
        document.querySelector('#resetButton').disabled = false;
    }


    // Generate computer choice 
    function generateComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        let randChoice = Math.floor(Math.random() * 3);

        return choices[randChoice];
    }

    // Determine the winner
    function determineWinner() {
        switch (true) {
            case (userChoice === 'rock' && computerChoice === 'paper'):
            case (userChoice === 'scissors' && computerChoice === 'rock'):
            case (userChoice === 'paper' && computerChoice === 'scissors'):
                lossesCounter++;
                displayImageChoice(userChoice, computerChoice);
                document.querySelector('#result').innerHTML = 'You Lose!';
                console.log('Computer win');
                break;
            case (userChoice === 'paper' && computerChoice === 'rock'):
            case (userChoice === 'rock' && computerChoice === 'scissors'):
            case (userChoice === 'scissors' && computerChoice === 'paper'):
                winsCounter++;
                displayImageChoice(userChoice, computerChoice);
                document.querySelector('#result').innerHTML = 'You win!';
                break;
            case (userChoice === '' && computerChoice === ''):
                break;
            default:
                displayImageChoice(userChoice, computerChoice);
                tiesCounter++;
                document.querySelector('#result').innerHTML = 'Draw!';
            }
    }

    // Update the user and computer image with user and computer choice image
    function displayImageChoice(user = "user", computer = "computer") {
        userChoiceDisplay = document.querySelector('#userChoice');
        computerChoiceDisplay = document.querySelector('#computerChoice');

        userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${user}.png" alt="${user}" class='choice--img'/>`
        computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computer}.png" alt="${computer}" class='choice--img'/>`
    }   

    // Display the score
    function displayScores() {
        wins.innerHTML = winsCounter;
        losses.innerHTML = lossesCounter;
        ties.innerHTML = tiesCounter;
    }
});