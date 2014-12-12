window.addEventListener('load', turnOn);

function turnOn () {
	var ball = document.querySelector('.ball'),
		wrapper = document.querySelector('.wrapper');

	wrapper.addEventListener('click', showAnswer);
	// ball.addEventListener('mouseover', shake);

	function showAnswer () {
		var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());
		console.log(answers[answer]);
	}

	function shake () {

		
			if (ball.style.top == 150) {
				for (i = 0; i < 5; i++) {
					ball.style.top = ball.style.top - 10;
					console.log("-10 :: " + ball.style.top);
				}
			} else if (ball.style.top == 100) {
				for (i = 0; i < 5; i++) {
					ball.style.top = ball.style.top + 10;
					console.log("+10 :: " + ball.style.top);
				}
			}

	}

}