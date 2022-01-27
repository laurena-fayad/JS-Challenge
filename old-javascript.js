document.body.style.backgroundColor = "#0a2351"

var audio_green = new Audio("/sounds/green.mp3")
var audio_red = new Audio("/sounds/red.mp3")
var audio_yellow = new Audio("/sounds/yellow.mp3")
var audio_blue = new Audio("/sounds/blue.mp3")
var audio_wrong = new Audio("/sounds/wrong.mp3")

var green_btn = document.getElementById("green")
var red_btn = document.getElementById("red")
var yellow_btn = document.getElementById("yellow")
var blue_btn = document.getElementById("blue")
var title = document.getElementById("title")
var game_over_text = "Game Over, Press Any Key To Restart"

var turn = 1
var solution = []
var user_input = []

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

function randomBtn(){
    var random_btn = Math.floor((Math.random() * 4) + 1)
    if (random_btn == 1){
        pressGreenBtn()
    }else if(random_btn == 2){
        pressRedBtn()
    }else if(random_btn == 3){
        pressYellowBtn()
    }else if (random_btn == 4){
        pressBlueBtn()
    }
    return random_btn.toString()
}

function gameOver(){
    document.body.classList.add("game-over");
    audio_wrong.play()
    title.textContent = game_over_text
    document.body.style.backgroundColor = "red"
    setTimeout(function(){
        document.body.style.backgroundColor = "#0a2351"
    }, 300); 
}

function userTurn(){

    setTimeout(function(){
        
        green_btn.addEventListener("click", function(){ 
            pressGreenBtn()
            user_input.push("1")
            console.log("Green clicked")
        })
        
        red_btn.addEventListener("click", function(){
            pressRedBtn()
            user_input.push("2")
        })
        
        yellow_btn.addEventListener("click", function(){
            pressYellowBtn()
            user_input.push("3")
        })
        
        blue_btn.addEventListener("click", function(){
            pressBlueBtn()
            user_input.push("4")
        })
        
    },1000)
}


function computerTurn(){
    title.textContent = "Level " + turn
    solution.push(randomBtn())
}

function checkInput(){
    for (var i=0; i<solution.length;i++)
    {
        if (user_input[i] === solution[i]){
            return true

        }else{
            gameOver()
        }
    }
}

document.addEventListener("keypress", function(event) {

    title.textContent = "Level " + turn
    solution.push(randomBtn())
    userTurn()
    if(checkInput())

}) // end of game
