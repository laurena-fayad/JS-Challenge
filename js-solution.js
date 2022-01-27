var game_flag = false
var solution = []
var user_input = []
var buttons_colors = ["red", "green", "blue", "yellow"]
var level = 1
var title = document.getElementById("title")
var btns = document.getElementsByClassName("btn")


function computerClicks(){
    user_input = [];
    var random_nb = Math.floor((Math.random() * 4));
    var selected_btn = buttons_colors[random_nb];
    solution.push(selected_btn);

    selected_btn.classList.add("pressed");
    setTimeout(function(){
        selected_btn.classList.remove("pressed");
    }, 100); 

    title.textContent = "Level " + level;
    level++;
    setTimeout(() => {
        playAudio(selected_btn);
    }, 500);
}

function playAudio (audio){
    var sound = new Audio ("sounds/" + audio + ".mp3");
    sound.play();
}

function checkUserInput(turn){
    if(user_input[turn] == solution[turn]){
        if (user_input.length == solution.length){
            computerClicks();
        }
    }else{
        document.body.classList.add("game-over")
        setTimeout(() => {
            document.body.classList.remove("game-over")
        }, 500);
        gameOver();
    }
}

document.addEventListener("keypress", function(event) {
    if (!game_flag){
        game_flag = true;
        title.textContent = "Level 1"
        computerClicks();
    };

    btns.addEventListener("click", function(event){ 
        clicked_btn = event.target.id;
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
    title.textContent = ("Game Over. Press Any Key To Restart");
    var audio_wrong = new Audio("/sounds/wrong.mp3");
    audio_wrong.play();
}