var rupeesTotal = 0;
var wins = 0;
var losses = 0;
var correctAnswer;
var blueValue, greenValue, yellowValue, redValue;

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

function resetGame() {
    rupeesTotal = 0;
    $("#rupees-counter").html("You gave me " + rupeesTotal + " rupees so far...");
    correctAnswer = Math.floor(Math.random() * 102) +19;
        console.log(correctAnswer);
        $("#heart-container-price").html("The heart container costs " + correctAnswer + ". <br>Can you afford it?");
    blueValue = Math.floor(Math.random() * 12) +1;    
    greenValue = Math.floor(Math.random() * 12) +1;  
    yellowValue = Math.floor(Math.random() * 12) +1;  
    redValue = Math.floor(Math.random() * 12) +1;  
};

resetGame();

function checkAmount() {
    if (rupeesTotal === correctAnswer) {
        alert("Good. You can afford the heart container.");
        wins++;
        resetGame();
    }

    else if (rupeesTotal > correctAnswer) {
        alert("What is this? I don't have any change for you!! Try again.");
        losses++;
        resetGame();
    };
};

$("#blue-rupee").on("click", function() {
    // rupeesTotal = blueValue + rupeesTotal
    rupeesTotal += blueValue;
    console.log(rupeesTotal)
    $("#rupees-counter").html("You gave me " + rupeesTotal + " rupees so far...");
    checkAmount();
});

$("#green-rupee").on("click", function() {
    // rupeesTotal = greenValue + rupeesTotal
    rupeesTotal += greenValue;
    console.log(rupeesTotal)
    $("#rupees-counter").html("You gave me " + rupeesTotal + " rupees so far...");
    checkAmount();
});

$("#yellow-rupee").on("click", function() {
    // rupeesTotal = yellowValue + rupeesTotal
    rupeesTotal += greenValue;
    console.log(rupeesTotal)
    $("#rupees-counter").html("You gave me " + rupeesTotal + " rupees so far...");
    checkAmount();
});

$("#red-rupee").on("click", function() {
    // rupeesTotal = redValue + rupeesTotal
    rupeesTotal += greenValue;
    console.log(rupeesTotal)
    $("#rupees-counter").html("You gave me " + rupeesTotal + " rupees so far...");
    checkAmount();
});

$("#wins-counter").html("Wins: " + wins);
$("#losses-counter").html("Losses: " + losses);