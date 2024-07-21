var gamePattern = []
var buttonColors = ["red","blue","green","yellow"]
var userClickedPattern = []
var started = false
var level = 0


// when key pressed, the game Start
$(document).keydown(function() {
	//if not started yet, text changes 
	if (!started) {
		$("#level-title").text("Level " + level)
		nextSequence()
		started = true;
	} 
})


//Creating new problem set 
function nextSequence() {
	//* user need to click from the beginning, so reset the userClickedPattern
	userClickedPattern = []

	//1. add random color to the List  (Game Stage)
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor)	

	//2. add Audio sounds when added 
	playSound(randomChosenColor)

	//3. add animation to the certain button
	$("."+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

	//4. Increase Level each time the function is called, shows in H1
	level ++ 
	$("#level-title").text("Level " + level);

	//Check the color
	console.log(gamePattern)
}


//Creating answer from the User's click event
$(".btn").on("click", function(event) {
	//1. Track the clicked color, and add to the answer list
	var userChosenColor = event.target.id
	userClickedPattern.push(userChosenColor)

	//2. Return the sound
	playSound(userChosenColor)

	//3. Animate button when pressed
	animatePress(userChosenColor)

	//4. check the answer
	checkAnswer(userClickedPattern.length - 1)

	//Check the color
	console.log(userClickedPattern)
})




//Supporting functions (Play sound, Pressed button animation)
function playSound(colorName) {
	var audio = new Audio("sounds/"+colorName+".mp3")
	audio.play()
}

function animatePress(currentColor) {
	$("." + currentColor).addClass("pressed")

	setTimeout(function() {
		$("." + currentColor).removeClass("pressed")}, 100)
}


function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
	console.log("success")
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function() {nextSequence()}, 1000)
			}}
	else {
	//when wrong, wrong sound & background & go back to the first screen
	console.log("wrong")
	$("body").addClass("game-over")
	setTimeout(function() {$("body").removeClass("game-over")}, 200)
	playSound("wrong")
	$("#level-title").text("Game Over, Press Any Key to Restart")
	started = false
	level = 0
	}
}
