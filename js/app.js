$(document).ready(function() {
	$('.ryu-still').show();
	$('.brought-by').show();
	$('.how-to').show();
})

//  --- MOUSEENTER AND MOUSELEAVE .RYU CONTAINER--- //
$('.ryu').on("mouseenter", function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})

$('.ryu').on("mouseleave", function() {
	$('.ryu-still').show();
	$('.ryu-ready').hide();
});

//  --- MOUSEDOWN ACTIONS --- //

$('.ryu').on("mousedown", function() {
	playHadouken();
	$('.ryu-throwing').show();
	$('.ryu-ready').hide();
	$('.hadouken').finish().show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
		}
	);
});

 // --- MOUSEUP ACTIONS --- //

 $('.ryu').on("mouseup", function () {
 	$('.ryu-throwing').hide();
 	$('.ryu-ready').show();
 	soundIsOn = !soundIsOn; //SoundIsON ?
	console.log(soundIsOn);
 });

 //  --- KEYDOWN ACTION --- //

$(document).on("keydown",function(event){
	if(88 == event.which) //What is event.which? //
	{
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
	}
});

//  --- KEYUP ACTION --- //

$(document).on("keyup",function(event){
	if(88 == event.which)
	{
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	}
});

//  --- VOLUME CONTROL --- //

$(".volume-control").on("click",function()
{
	soundIsOn = !soundIsOn;
	$('.volume-control').toggleClass("fa-volume-up fa-volume-off");
});



// function playHadouken () {
// 		$('#hadouken-sound')[0].volume = 0.5;
// 		$('#hadouken-sound')[0].load();
// 		$('#hadouken-sound')[0].play();
// 	}
