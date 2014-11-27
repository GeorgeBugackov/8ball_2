$(function () {
	var answers = ['Yes', 'No'],
		answer = Math.round(Math.random());

	$(".wrapper").on('click', showAnswer);

	function showAnswer () {

		$(".wrapper").off('click', showAnswer);

		ballUp();

	}

	function ballUp () {
		$(".ball").animate({
			top: 100
		}, 500, function () {
			ballDown();
		});
	}

	function ballDown () {
		$(".ball").animate({
				top: 150
		}, 500, function () {
			getAnswer();
		})
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