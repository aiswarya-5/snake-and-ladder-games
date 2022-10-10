for (var i = 1; i <= 100; i++) {
	document.getElementById(i).innerHTML = i;
}

var dice = ['<img src="image/1.png" alt="dice">', '<img src="image/2.png" alt="dice">', '<img src="image/3.png" alt="dice">', '<img src="image/4.png" alt="dice">', '<img src="image/5.png" alt="dice">', '<img src="image/6.png" alt="dice">'];

var my_turn = 0;
var previousFirst = 0;
var previousSec = 0;

function play() {
	new Audio('voice/diceRoll.mp3').play()
	var random_no = Math.floor(Math.random() * 6);
	document.getElementById("dice").innerHTML = dice[random_no];
	if (my_turn == 0) {
		document.getElementById('snakeMsg').innerHTML="player1 turn";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.border = "thick dotted #f00";
		document.getElementById('snakeMsg').style.backgroundColor = 'transparent';
		if (previousFirst > 0) {
			if (100 - previousFirst < random_no + 1) {
				my_turn = 1;
				return;
			} else {
				document.getElementById((previousFirst).toString()).innerHTML = previousFirst;
				document.getElementById((previousFirst).toString()).style.color = "#000";
			}
		}
		document.getElementById((previousFirst + random_no + 1).toString()).innerHTML ="<i class='material-icons player'>person</i>";

		document.getElementById((previousFirst + random_no + 1).toString()).style.color = "#f00";
		if ((previousFirst + random_no + 1) == 100) {
			setTimeout(() => {
				alert("player1 is winner !!");
				window.location.reload();
			}, 800);

		}
		previousFirst = previousFirst + random_no + 1;

		previousFirst = snake(previousFirst, "#f00", previousFirst);
		previousFirst = ladder(previousFirst, "#f00", previousFirst);
		my_turn = 1;

	} else if (my_turn == 1) {
		document.getElementById('snakeMsg').innerHTML="player2 turn";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.border = "thick dotted #fff";
		document.getElementById('snakeMsg').style.backgroundColor = 'transparent';
		if (previousSec > 0) {
			if (100 - previousSec < random_no + 1) {
				my_turn = 0;
				return;
			} else {
				document.getElementById((previousSec).toString()).innerHTML = previousSec;
				document.getElementById((previousSec).toString()).style.color = "#000";
			}
		}
		document.getElementById((previousSec + random_no + 1).toString()).innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById((previousSec + random_no + 1).toString()).style.color = "#00f";
		if ((previousSec + random_no + 1) == 100) {
			setTimeout(() => {
				alert("player2 is winner !!");
				window.location.reload();
			}, 800);

		}
		previousSec = previousSec + random_no + 1;
		previousSec = snake(previousSec, "#00f", previousSec);
		previousSec = ladder(previousSec, "#00f", previousSec);
		my_turn = 0;
	}
}




//snake function

function snake(place_no, color_given, previous_player) {
	if (place_no == 26) {
		document.getElementById("26").innerHTML = 26;
		document.getElementById("26").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("4").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("4").style.color = color_given;
		return 4;

	} else if (place_no == 94) {
		document.getElementById("94").innerHTML = 94;
		document.getElementById("94").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("18").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("18").style.color = color_given;
		return 18;
	} else if (place_no == 63) {
		document.getElementById("63").innerHTML = 63;
		document.getElementById("63").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("21").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("21").style.color = color_given;
		return 21;
	} else if (place_no == 80) {
		document.getElementById("80").innerHTML = 80;
		document.getElementById("80").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("58").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("58").style.color = color_given;
		return 58;
	} else if (place_no == 73) {
		document.getElementById("73").innerHTML = 73;
		document.getElementById("73").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("50").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("50").style.color = color_given;
		return 50;
	} else if (place_no == 98) {
		document.getElementById("98").innerHTML = 98;
		document.getElementById("98").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Sorry.. You are Swallowed by the snake <p> Better luck next time</p>";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#da291c";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("29").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("29").style.color = color_given;
		return 29;
	} else {
		return previous_player;
	}

}

//ladder function

function ladder(place_no, color_given, previous_player) {
	if (place_no == 3) {
                
		document.getElementById("3").innerHTML = 3;
		document.getElementById("3").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Hurray!! You climbed the Ladder";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#04aa6d";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("24").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("24").style.color = color_given;
		return 24;
	} else if (place_no == 13) {
		document.getElementById("13").innerHTML = 13;
		document.getElementById("13").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Hurray!! You climbed the Ladder";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#04aa6d";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("95").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("95").style.color = color_given;
		return 95;
	} else if (place_no == 12) {
		document.getElementById("12").innerHTML = 12;
		document.getElementById("12").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Hurray!! You climbed the Ladder";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#04aa6d";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("52").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("52").style.color = color_given;
		return 52;
	} else if (place_no == 61) {
		document.getElementById("61").innerHTML = 61;
		document.getElementById("61").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Hurray!! You climbed the Ladder";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#04aa6d";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("99").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("99").style.color = color_given;
		return 99;
	} else if (place_no == 72) {
		document.getElementById("72").innerHTML = 72;
		document.getElementById("72").style.color = "#000";
		document.getElementById('snakeMsg').innerHTML = "Hurray!! You climbed the Ladder";		
		document.getElementById('snakeMsg').style.color="#fff"
		document.getElementById('snakeMsg').style.backgroundColor = "#04aa6d";
		document.getElementById('snakeMsg').style.border= 'none';
		document.getElementById("91").innerHTML = "<i class='material-icons'>person</i>";
		document.getElementById("91").style.color = color_given;
		return 91;
	} else {
		return previous_player;
	}
}