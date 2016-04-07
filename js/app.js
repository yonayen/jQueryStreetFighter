var soundIsOn = true;

$(document).ready(function() {
	$('.ryu-still').show();
	$('.brought-by').show();
	$('.how-to').show();
})

//  --- MOUSEENTER AND MOUSELEAVE .RYU CONTAINER--- //
$('.ryu').on("mouseenter", function() {
	$('.ryu-char').hide();
	$('.ryu-ready').show();
})

$('.ryu').on("mouseleave", function() {
	$('.ryu-char').hide();
	$('.ryu-still').show();
});

//  --- MOUSEDOWN ACTIONS --- //

$('.ryu').on("mousedown", function() {
	playHadouken();
	$('.ryu-char').hide();
	$('.ryu-throwing').show();
	$('.hadouken').finish().show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '-212px');
		}
	);
});

 // --- MOUSEUP ACTIONS --- //

 $('.ryu').on("mouseup", function () {
 	$('.ryu-char').hide();
 	$('.ryu-ready').show();
 	// soundIsOn = !soundIsOn; //SoundIsON ?
	console.log(soundIsOn);
 });

 //  --- KEYDOWN ACTION --- //

$(document).on("keydown",function(event){
	if(88 == event.keyCode) //What is event.which? //
	{
		$('.ryu-char').hide();
		$('.ryu-cool').show();
	}
});

//  --- KEYUP ACTION --- //

$(document).on("keyup",function(event){
	if(88 == event.keyCode)
	{
		$('.ryu-char').hide();
		$('.ryu-ready').show();
	}
});

//  --- VOLUME CONTROL --- //

$(".volume-control-container").on("click",function()
{
	var demoTrueVariable = true;
	console.log(demoTrueVariable);
	console.log(!demoTrueVariable);

	var demoFalseVariable = false;
	console.log(demoFalseVariable);
	console.log(!demoFalseVariable);

	soundIsOn = !soundIsOn;
	$('.volume-control').toggleClass("fa-volume-up fa-volume-off");
});



function playHadouken () {
	if(soundIsOn)
	{
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
}
