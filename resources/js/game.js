var answers;

$(function() {

	//init
	$.getJSON("resources/data/answers.json", function(json) {
	    answers = json; 
	});
	$('#answer').hide();

	//buttons	
	$('#yesbutton').click(function(){
		answerQuestion(true);
	});
	$('#nobutton').click(function(){
		answerQuestion(false);
	});

});

function answerQuestion(answer){

	//loads random yes/no answer
	if (answer)
		answers["yes"][Math.floor(Math.random() * answers["yes"].length)]
	else
		answers["no"][Math.floor(Math.random() * answers["no"].length)]
	
	$('#answer').text();

	$('#answer').show();
	$('#part1').hide();
	$('#part2').fadeIn();
}