var scenario = document.getElementById('scenario');
var hit1 = document.getElementById('hit1');
var stay1 = document.getElementById('stay1');


hit1.addEventListener('click', function(){
	alert("correct")
});

stay1.addEventListener('click', function(){
	alert("When the dealer is showing a 7 or higher, and you have a 16 you should hit!")
})