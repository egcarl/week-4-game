// Create variables for global scale

var wins = 0;
var losses = 0;
var targetValue = 0;
var playerScore = 0;

var gem = {
    blue: {
        value: 0,
    },
    green: {
        value: 0,
    },
    red: {
        value: 0,
    },
    yellow: {
        value: 0,
    },
};

// Random number generator for gem values and winning target value

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// start the game

var startGame = function() {
    
    //create winning number for round
    targetValue = randomNumberGenerator(120, 19);
    
    console.log(targetValue);

    //create gem values for round
    gem.blue.value = randomNumberGenerator(12,1);
    console.log(gem.blue.value);
    gem.green.value = randomNumberGenerator(12,1);
    console.log(gem.green.value);
    gem.red.value = randomNumberGenerator(12,1);
    console.log(gem.red.value);
    gem.yellow.value = randomNumberGenerator(12,1);
    console.log(gem.yellow.value);

    $("#playerGameScore").text(playerScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#targetValue").text(targetValue);

}; 

var checkWin = function (){
    if (playerScore > targetValue) {
        losses++;
        $("#losses").html(losses);
        alert ("Sorry, you lost!");
        playerScore = 0;
        startGame();
    }

    else if (playerScore === targetValue) {
        wins++;
        $("#wins").html(wins);
        alert ("Congratulations! You've won!");
        playerScore = 0;
        startGame();
    }

}

// Add gem values to player score and check win

$("#blueGem").click(function () {
    playerScore = playerScore + gem.blue.value;
    console.log("I've clicked blue " + gem.blue.value);
    console.log("Player score " + playerScore);
    $("#playerGameScore").text(playerScore); 
    checkWin();
})

$("#greenGem").click(function () {
    playerScore = playerScore + gem.green.value;
    console.log("I've clicked green " + gem.green.value);
    console.log("Player score " + playerScore);
    $("#playerGameScore").text(playerScore); 
    checkWin();
})

$("#yellowGem").click(function () {
    playerScore = playerScore + gem.yellow.value;
    console.log("I've clicked yellow " + gem.yellow.value);
    console.log("Player score " + playerScore);
    $("#playerGameScore").text(playerScore); 
    checkWin();
})

$("#redGem").click(function () {
    playerScore = playerScore + gem.red.value;
    console.log("I've clicked red " + gem.red.value);
    console.log("Player score " + playerScore);
    $("#playerGameScore").text(playerScore); 
    checkWin();
})


startGame();