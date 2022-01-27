//Variables 
var game_flag = false
var solution = []
var user_input = []
var buttons_colors = ["red", "green", "blue", "yellow"]
var level = 1
var title = document.getElementById("title")
var btns = document.getElementsByClassName("btn")
var green_btn = document.getElementById("green")
var red_btn = document.getElementById("red")
var yellow_btn = document.getElementById("yellow")
var blue_btn = document.getElementById("blue")
var audio_green = new Audio("sounds/green.mp3")
var audio_red = new Audio("sounds/red.mp3")
var audio_yellow = new Audio("sounds/yellow.mp3")
var audio_blue = new Audio("sounds/blue.mp3")

//Animation functions
function pressGreenBtn (){
    audio_green.play()
    green_btn.classList.add("pressed");
    setTimeout(function(){
        green_btn.classList.remove("pressed");
    }, 100); 
}

function pressRedBtn (){
    audio_red.play()
    red_btn.classList.add("pressed");
    setTimeout(function(){
        red_btn.classList.remove("pressed");
    }, 100); 
}

function pressYellowBtn (){
    audio_yellow.play()
    yellow_btn.classList.add("pressed");
    setTimeout(function(){
        yellow_btn.classList.remove("pressed");
    }, 100); 
}

function pressBlueBtn (){
    audio_blue.play()
    blue_btn.classList.add("pressed");
    setTimeout(function(){
        blue_btn.classList.remove("pressed");
    }, 100); 
}

function computerClicks(){
    //User answers set to 0 at every new level
    user_input = [];
    var random_nb = Math.floor((Math.random() * 4));
    var selected_btn = buttons_colors[random_nb];
    solution.push(selected_btn);
    //Animating the randomly selected button
    if (selected_btn == "green"){
        pressGreenBtn()    
    }else if(selected_btn == "blue"){
        pressBlueBtn()
    }else if(selected_btn == "red"){
        pressRedBtn() 
    }else if(selected_btn == "yellow"){
        pressYellowBtn()
    }
    //Updating the level
    title.textContent = "Level " + level;
    level++;
}

function checkUserInput(turn){
    //Give turn back to computer to continue if user wins
    if(user_input[turn] == solution[turn]){
        if (user_input.length == solution.length){
            setTimeout(() => {
                computerClicks();
            }, 500);
        }
    //if not, reset the game
    }else{
        document.body.classList.add("game-over")
        setTimeout(() => {
            document.body.classList.remove("game-over")
        }, 500);
        gameOver();
    }
}

function gameOver(){
    level = 1;
    solution = [];
    user_input = [];
    game_flag = false;
    title.textContent = ("Game Over. Press Any Key To Restart");
    var audio_wrong = new Audio("/sounds/wrong.mp3");
    audio_wrong.play();
}
//Execution
document.addEventListener("keypress", function(event) {
    if (!game_flag){
        game_flag = true;
        title.textContent = "Level 1"
        computerClicks();
    };

    for (var i = 0; i<btns.length; i++){
        btns[i].addEventListener("click", function(event){ 
            clicked_btn = event.target.id;
            user_input.push(clicked_btn);
            
            if (clicked_btn == "green"){
                pressGreenBtn()     
            }else if(clicked_btn == "blue"){
                pressBlueBtn()
            }else if(clicked_btn == "red"){
                pressRedBtn()
            }else if(clicked_btn == "yellow"){
               pressYellowBtn()
            }
            checkUserInput(user_input.length -1);
        })
    }
})