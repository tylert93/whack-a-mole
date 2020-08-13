document.addEventListener("DOMContentLoaded", () =>{
    //create variables    
    const square = document.querySelectorAll(".square"),
          mole = document.querySelectorAll(".mole"),
          timeLeft = document.querySelector("#time-left"),
          start = document.querySelector("#start"),
          reset = document.querySelector("#reset");

    let score = document.querySelector("#score");
        currentTime = timeLeft.textContent;
        result = 0;
        playing = false;
        hitPosition = null;

    //start the game when the player commands
    start.addEventListener("click", () => {
        start.style.display = "none";
        reset.style.display = "block";
        playing = true;
        moveMole();
        //begin the countdown timer
        setInterval(countDown, 1000);
        
        function countDown(){
            if(playing === true){
                currentTime--;
                timeLeft.textContent = currentTime;
                //when the time runs out stop the timer and tell the player their score
                if(currentTime === 0){
                    playing = false;
                    hitPosition = null;
                    clearInterval(countDown);
                    clearInterval(randomSquare, 750);
                    removeMoles();
                    reset.textContent = "Play Again";
                    alert("GAME OVER - Final Score: " + result);
                }
            }
        }
    })
    //reset the game when the player commands
    reset.addEventListener("click", () => {
        location = location;
    })
    //check if a mole has been whacked
    square.forEach((item) => {
        item.addEventListener("mouseup", () =>{
            if(item.id === hitPosition){
                result = result + 1;
                score.textContent = result;
            }
        })
    })
    //make the mole appear on a random square
    function randomSquare(){
        if(playing === true){
            removeMoles();
            let randomPosition = square[Math.floor(Math.random() * 9)];
            randomPosition.classList.add("mole");
            hitPosition = randomPosition.id;
        }    
    }
    //move the mole to a random sqaure
    function moveMole(){
            setInterval(randomSquare, 750);
    }
    //remove the mole from the gameboard and 
    function removeMoles(){
        square.forEach(className => {
            className.classList.remove("mole");
        });
    }
    //animate the hammer hitting when a square is clicked
    square.forEach((item) => {
        item.addEventListener("mousedown", function(){
            this.classList.add("hammerDown");
        });
        item.addEventListener("mouseup", function(){
            this.classList.remove("hammerDown");
        });
    })

});