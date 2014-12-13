window.addEventListener('load', turnOn);

function turnOn () {
	var wrapper = document.querySelector('.wrapper'),
		ball = wrapper.querySelector('.ball'),
		text = ball.querySelector('.text');

	wrapper.addEventListener('click', showAnswer);

	function showAnswer () {
		var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());

		wrapper.removeEventListener('click', showAnswer);

		fading(true);

		text.innerText = answers[answer];

		setTimeout(function() {
			fading(false);
			text.innerText = 8;
			wrapper.addEventListener('click', showAnswer);
		}, 1000);
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