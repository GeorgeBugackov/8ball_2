$(function () {
	var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());

	$(".wrapper").on('click', showAnswer);

	function showAnswer () {

		$(".wrapper").off('click', showAnswer);

		shake();

		$(".ball").promise().done(function () {
			setTimeout(getAnswer, 700);
		});

	}

	function shake () {
		for (i = 0; i < 10; i++) {
			ballMove();
		}	
	}

	function ballMove () {
		$(".ball").animate({
						top: 100
					}, 50,'swing')
				.animate({
						top: 150
					}, 50,'swing');
	}

	function getAnswer () {
		var answers = ['Yes', 'No'],
			answer = answers[Math.round(Math.random())];

		$(".text").text(answer).animate({
    				opacity: 0,
			}, 3000, function () {
				revertText();
			});
	}

	function revertText () {
		$(".text").text('8').animate({
    				opacity: 1,
			}, 3000);

  		$(".wrapper").on('click', showAnswer);
	}

	

});