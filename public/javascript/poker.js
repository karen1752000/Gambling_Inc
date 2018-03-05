var input = document.getElementById('pBox7')
var submit = document.getElementById('submit')
var earlyPos = 'early'
var tier1 = "AA, KK, QQ, AKs"
var tier2 = "JJ, 1010, AQs, AJs, AKo"
var tier3 = "99, ATs, KQs, KJs, AQo"
var tier4 = "88, QJs, AJo, KQo"
var tier5 = "77, Ax/s KJo, K10s, A10o"
var tier6 = "66, 55, K10o, Q10o"
var tier7 = "44, 33, 22, low suited connectors"
var positionHands = document.getElementById('pBox8')
var helper;
var whyNot;
var whoCares;
var moreCommits;

submit.addEventListener('click', function(){
	if(input.value == earlyPos){
		positionHands.innerHTML = tier1 + tier2 + tier3
	}
})