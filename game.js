var gamePattern = []
var buttonColors = ["red","blue","green","yellow"]
var userClickedPattern = []
var level = 0

//Creating new problem set 
function nextSequence() {
	//1. add random color to the List  (Game Stage)
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor)

	//2. add Audio sounds when added 
	playSound(randomChosenColor)

	//3. add animation to the certain button
	$("."+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

	//4. Increase Level each time the function is called
	level ++ 

	//5. Undate h1 with the changed value of level
	$("h1").html("Level " + level)
	//Check the color
	console.log(randomChosenColor)
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


// when key pressed, the game Start
$(document).keydown(function() {
	nextSequence()
	$("#level-title").text("Level " + level)

})

