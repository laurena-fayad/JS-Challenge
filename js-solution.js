document.body.style.backgroundColor = "#0a2351"

var audio_green = new Audio("/sounds/green.mp3")
var audio_red = new Audio("/sounds/red.mp3")
var audio_yellow = new Audio("/sounds/yellow.mp3")
var audio_blue = new Audio("/sounds/blue.mp3")

var green_btn = document.getElementById("green")
var red_btn = document.getElementById("red")
var yellow_btn = document.getElementById("yellow")
var blue_btn = document.getElementById("blue")

level_nb = 1

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
    audio_red.play()
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
    }else if (random_btn){
        pressBlueBtn()
    }
}

green_btn.addEventListener("click", function(){ 
    pressGreenBtn()
})

red_btn.addEventListener("click", function(){
    pressRedBtn()
})

yellow_btn.addEventListener("click", function(){
    pressYellowBtn()
})

blue_btn.addEventListener("click", function(){
    pressBlueBtn()
})



document.addEventListener("keypress", function(event) {
    document.getElementById("title").textContent = "Level " + level_nb
    randomBtn()










}); // end of game