let targetScore;
let userScore = 0;
let btn1Val, btn2Val, btn3Val, btn4Val;
let lossRatio = 0
let winRatio = 0


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
    userScore = 0;
    targetScore = randomIntFromInterval(19, 120);
    console.log(targetScore);
    btn1Val = randomIntFromInterval(1, 12);
    btn2Val = randomIntFromInterval(1, 12);
    btn3Val = randomIntFromInterval(1, 12);
    btn4Val = randomIntFromInterval(1, 12);
    console.log(btn1Val);
    console.log(btn2Val, btn2Val, btn3Val, btn4Val);
    $("#button-1").attr("value", btn1Val);
    $("#button-2").attr("value", btn2Val);
    $("#button-3").attr("value", btn3Val);
    $("#button-4").attr("value", btn4Val);
    $('#targetScore').text(targetScore);
    $('#currentScore').text(userScore);

}

$(document).ready(function () {
    startGame();
    // $('#targetScore').text(targetScore);

    // $('#currentScore').text(userScore);
    // ===== Event Handlers for buttons ======
    $('#button-1').on('click', function () {
        console.log('button 1 clicked');
        userScore = userScore + btn1Val;
        $('#currentScore').text(userScore);
        winOrLose();

    });

    $('#button-2').on('click', function () {
        console.log('button 2 clicked');
        userScore = userScore + btn2Val;
        $('#currentScore').text(userScore);
        winOrLose();
    });

    $('#button-3').on('click', function () {
        console.log('button 3 clicked');
        userScore = userScore + btn3Val;
        $('#currentScore').text(userScore);
        winOrLose();
    });

    $('#button-4').on('click', function () {
        console.log('button 4 clicked');
        userScore = userScore + btn4Val;
        $('#currentScore').text(userScore);
        winOrLose();
    });
})

function winOrLose() {
    if (userScore === targetScore) {
        window.alert("You win");
        winRatio++
        console.log("WIN", winRatio)
        // use jquery to change html for the <span>
        $("#wins").html(winRatio)
        startGame();
    } else if (userScore > targetScore) {
        window.alert("You fail");
        lossRatio++
        console.log("Loss", lossRatio)
        startGame();
        $("#losses").html(lossRatio)
        startGame();
    } else if (userScore > targetScore) {
    }
}
console.log("loss", lossRatio)
console.log("WIN", winRatio)







