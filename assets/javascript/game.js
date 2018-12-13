//jQuery//

//variables//
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/crystal1.png", "./assets/images/crystal2.png", "./assets/images/crystal3.jpg", "./assets/images/crystal4.jpeg"];

$(document).on("click", ".crystal", crystalClick);

// Functions//

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
		console.log(targetNumber);
	}

	function crystalClick () {
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
    }

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 2));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
			console.log("value", (Math.floor(Math.random() * 12) + 2));
		}
	}


	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}


	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

	randomTargetNumber();
	resetHTML ();
	resetCrystals ();


	
    
	

