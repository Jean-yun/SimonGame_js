var gamePattern = []
var buttonColors = ["red","blue","green","yellow"]
var userClickedPattern = []

function nextSequence() {

	//1. add random color to the List  (Game Stage)
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor)

	//2. add Audio sounds when added 
	playSound(randomChosenColor)

	//3. add animation to the certain button
	$("."+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

	//Check the color
	console.log(randomChosenColor)

}


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




function playSound(colorName) {
	var audio = new Audio("sounds/"+colorName+".mp3")
	audio.play()
}

function animatePress(currentColor) {
	$("." + currentColor).addClass("pressed")

	setTimeout(function() {
		$("." + currentColor).removeClass("pressed")}, 100)
}


$(document).keydown(function() {
	nextSequence()
})