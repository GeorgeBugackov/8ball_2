window.addEventListener('load', turnOn);

function turnOn () {
	var wrapper = document.querySelector('.wrapper'),
		ball = wrapper.querySelector('.ball'),
		text = ball.querySelector('.text');

	ball.addEventListener('click', showAnswer);

	function showAnswer () {
		var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());

		ball.removeEventListener('click', showAnswer);

		fading(true);

		text.innerText = answers[answer];

		setTimeout(function() {
			fading(false);
			text.innerText = 8;
			ball.addEventListener('click', showAnswer);
		}, 5000);
	}

	function fading (toggle) {
		if (toggle) {
			text.className += (' fader');
			console.log("fader added");
		} else {
			text.className = '';
			text.className = 'text';
			console.log("fader removed");
		}
	}

}