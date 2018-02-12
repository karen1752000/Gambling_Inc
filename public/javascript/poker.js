var input = document.getElementById('pBox7');
var submit = document.getElementById('submit');
var input2 = document.getElementById('pBox15');
var submit2 = document.getElementById('submit2')
var input3 = document.getElementById('pBox21')
var submit3 = document.getElementById('submit3')
var image = document.getElementById('pBox16')
var bankroll = document.getElementById('pBox22')
var pos = ['early', 'middle', 'late'];
var tier1 = "AA, KK, QQ, AKs";
var tier2 = " JJ, 1010, AQs, AJs, AKo";
var tier3 = " 99, ATs, KQs, KJs, AQo";
var firstTier = tier1 + tier2 + tier3;
var tier4 = " 88, QJs, AJo, KQo";
var tier5 = " 77, Ax/s KJo, K10s, A10o";
var secondTier = firstTier + tier4 + tier5
var tier6 = " 66, 55, K10o, Q10o";
var tier7 = " 44, 33, 22, low suited connectors";
var positionHands = document.getElementById('pBox8');
var tImage = ['tight-passive', 'tight-aggressive', 'loose-passive', 'loose-aggressive']
var tightPass = 'We call this player a "scaredy-cat" because they play very few hands and plays "soft" meaning they are scared to put alot of money in the pot.  This player is very easily bluffed off their hand.'
var tightAggr = 'We call this player a "Rock" because they play few hands, but when they play they play hard.  Someone sitting back and only looking for aces, kings, queens, and AK often play this way.  They only feel comfortable playing "big hands".'
var loosePass = 'This is your classic "sucker" style.  They play alot of hands but they never raise.  They just keep seeing the next card and the next card hoping it wlll be their miracle card.  Professionals salivate when a sucker is at the table.  Great games have multiple suckers at the table.'
var looseAggr = 'We call this player a "kamikaze".  They play lots of hands and they play them fast, meaning aggressively.  They raise alot and are not scared to make big bets with no hand at all.  This is the toughest style to play against in a poker game.  Mastering it comes with very expensive lessons at the table as it also the style that can lose the most money.'


submit.addEventListener('click', function(){

	for (i=0; i<pos.length; i++){
	
	    if(input.value == pos[0]){
		positionHands.innerHTML = firstTier;
	    }

		if(input.value == pos[1]){
			positionHands.innerHTML = secondTier
		}
		
		if(input.value == pos[2]){
			positionHands.innerHTML = secondTier + tier6 + tier7
		}

	} 
	
  	
})

submit2.addEventListener('click', function(){

	for (i=0; i<tImage.length; i++){

		if(input2.value == tImage[0]){
			image.innerHTML = tightPass
		}
		if(input2.value == tImage[1]){
			image.innerHTML = tightAggr
		}
		if(input2.value == tImage[2]){
			image.innerHTML = loosePass
		}
		if(input2.value == tImage[3]){
			image.innerHTML = looseAggr
		}
	}
})


submit3.addEventListener('click', function(){


    let i = input3.value
	let x = i * .02
    let y = x /100
    let a = y.toFixed(2)
	let z = y/2
	let b = z.toFixed(2)

	if(y<.02){

		bankroll.innerHTML = "You call that a bankroll?  My kid has more than that in pennies in his piggy bank.  The world needs fast food employees."
	}
	if(y>.02 && y<=5){

		bankroll.innerHTML = "To never be taken out by variance, you should start with " + z + '/' + y + " no limit."
	}
	if(y>5){
		bankroll.innerHTML = "There's a better chance that unicorns come flying out of my ass the next time I bend over than there is of you having $" + i + " to play poker."
	}

})