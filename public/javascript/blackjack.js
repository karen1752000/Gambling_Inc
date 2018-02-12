var scenario = document.getElementById('scenario');
var hit1 = document.getElementById('hit1');
var stay1 = document.getElementById('stay1');
var hit2 = document.getElementById('hit2');
var stay2 = document.getElementById('stay2');
var hit3 = document.getElementById('hit3');
var stay3 = document.getElementById('stay3');
var hit4 = document.getElementById('hit4');
var stay4 = document.getElementById('stay4');
var hit5 = document.getElementById('hit5');
var stay5 = document.getElementById('stay5');

hit1.addEventListener('click', function(){
	alert("Correct!")
});

stay1.addEventListener('click', function(){
	alert("When the dealer is showing a 7 or higher, and you have a 16 you should hit!")
})

hit2.addEventListener('click', function(){
	alert("Whatever the dealer is showing, and you have a 17 or higher you should stand!")
});

stay2.addEventListener('click', function(){
	alert("Correct!")
})

hit3.addEventListener('click', function(){
	alert("When the dealer is showing either a 4, 5, or 6 and you have a 12 you should stand!")
});

stay3.addEventListener('click', function(){
	alert("Correct!")
})

hit4.addEventListener('click', function(){
	alert("Correct!")
});

stay4.addEventListener('click', function(){
	alert("When the dealer is showing a 7 or higher, and you have 15 you should hit!")
})

hit5.addEventListener('click', function(){
	alert("Correct!")
});

stay5.addEventListener('click', function(){
	alert("When the dealer is showing a 10 or higher, and you have 10 you should hit!")
})
