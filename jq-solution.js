//Variables
var game_flag = false
var solution = []
var user_input = []
var buttons_colors = ["red", "green", "blue", "yellow"]
var level = 1

//Animating the randomly selected button
function computerClicks(){
    user_input = [];
    var random_nb = Math.floor((Math.random() * 4));
    var selected_btn = buttons_colors[random_nb];
    solution.push(selected_btn);
    setTimeout(() => {
        $("." + selected_btn).fadeIn(100).fadeOut(150).fadeIn(100) 
    }, 500);
    $("#title").text("Level " + level);
    level++;
    setTimeout(() => {
        playAudio(selected_btn);
    }, 400);
}

//Plays sound of a specific button
function playAudio (audio){
    var sound = new Audio ("sounds/" + audio + ".mp3");
    sound.play();
}

//if the user wins, give turn back to computer to continue
function checkUserInput(turn){
    if(user_input[turn] == solution[turn]){
        if (user_input.length == solution.length){
            computerClicks();
        }
    //if not, game over
    }else{
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 500);
        gameOver();
    }
}

$(document).keypress(function() {
    if (!game_flag){
        game_flag = true;
        $("#title").text("Level 1");
        computerClicks();
    };
    //Get ID of the clicked button to add it to user input array
    $(".btn").click(function(event) {
        clicked_btn = event.target.id;
        $("." + clicked_btn).addClass("pressed");
        setTimeout(() => {
            $("." + clicked_btn).removeClass("pressed");
        }, 100);

        user_input.push(clicked_btn);
        playAudio(clicked_btn);
        checkUserInput(user_input.length -1);
    })
});

function gameOver(){
    level = 1;
    solution = [];
    user_input = [];
    game_flag = false;
    $("#title").text("Game Over. Press Any Key To Restart");
    var audio_wrong = new Audio("sounds/wrong.mp3");
    audio_wrong.play();
}