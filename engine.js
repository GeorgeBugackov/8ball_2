window.addEventListener('load', turnOn);

function turnOn () {
	var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());

	document.getElementsByClassName('wrapper')[0].addEventListener('click', showAnswer);

	function showAnswer () {

	}

}