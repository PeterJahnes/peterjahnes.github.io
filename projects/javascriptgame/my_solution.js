 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission:
// Goals:
// Characters:
// Objects:
// Functions:

// Pseudocode
// 
// 
/*
create html
a title
a discription
the game
	square map
		charicter
		potion
		potion empty
		treasure
create css

create js
	grab objects by id from html
	give them properties
	create movement
		??if shrink win
	create win and death
*/
// 
//
//

// Initial Code
var containerIcon = document.getElementById("container");
var trollIcon = document.getElementById("troll");
var potionIcon = document.getElementById("potion");
var posionIcon1 = document.getElementById("posion1");
var posionIcon2 = document.getElementById("posion2");
var posionIcon3 = document.getElementById("posion3");
var posionIcon4 = document.getElementById("posion4");
var posionIcon5 = document.getElementById("posion5");
var posionIcon6 = document.getElementById("posion6");
var treasureIcon = document.getElementById("treasure");

var troll = {
	size: 100,
	health: 100,
};
var treasure = {
	status: "closed"
};
var potion = {
	status: "full"
};
var poison = {
	damage: Math.floor(Math.random()*25)
};
/*
var poison2 = {
	empty: false,
	damage: Math.random(5,50)
};
var poison3 = {
	empty: false,
	damage: Math.random(5,200)
};
var poison4 = {
	empty: false,
	damage: Math.random(5,50)
};
var poison5 = {
	empty: false,
	damage: Math.random(5,50)
};
var poison6 = {
	empty: false,
	damage: Math.random(5,50)
};*/

var posTop = 0;
var posLeft = 200;

function notGoingOutOfBounds(direction) {
	if (troll.size == 100) {
		if (direction == "up") {
			if (posTop < 100) {
				return false;
			} else {
				return true;
			}
		}
		if (direction == "down") {
			if (posTop > 400) {
				return false;
			} else {
				return true;
			}
		}
		if (direction == "left") {
			if (posLeft < 100) {
				return false;
			} else {
				return true;
			}
		}
		if (direction == "right") {
			if (posLeft > 300) {
				return false;
			} else {
				return true;
			}
		}
	}
	
	if (troll.size == 50) {
		if (direction == "up") {
			if (posTop < 50) {
				return false;
			} else {
				return true;
			}
		}
		if (direction == "down") {
			if (posTop > 500) {
				return false;
			} else {
				return true;
			}
		}
		if (direction == "left") {
			if (posTop == 300 && posLeft > 0) {
				return true;
			}
			if (posLeft >= 0 && posLeft < 500) {
				if (posTop > 300 || posTop < 300) {
					if (posLeft > 0) {
						return true;
					}
				}
			} else if (posLeft > 600 && posLeft < 800) {
				if (posTop > 300 || posTop < 300) {
					if (posLeft > 650) {
						return true;
					}
				}
			} else {
				return false;
			}
		}
		if (direction == "right") {
			if (posTop == 300 && posLeft <750) {
				return true;
			}
			if (posLeft >= 0 && posLeft < 500) {
				if (posTop > 300 || posTop < 300) {
					if (posLeft < 450) {
						return true;
					}
				}
			} else if (posLeft > 600 && posLeft < 750) {
				if (posTop > 300 || posTop < 300) {
					if (posLeft < 750) {
						return true;
					}
				}
			} else {
				return false;
			}
		}
	}
}

function move(e) {
	if (isTrollAlive()) {
		if (e.keyCode === 38) {
			if (notGoingOutOfBounds("up")) {
				if (troll.size == 100) {
					posTop -= 100;
				} else {
					posTop -= 50;
				}
				trollIcon.style.top = posTop + "px";
			}
		}
		if (e.keyCode === 40) {
			if (notGoingOutOfBounds("down")) {
				if (troll.size == 100) {
					posTop += 100;
				} else {
					posTop += 50;
				}
				trollIcon.style.top = posTop + "px";
			}
		}
		if (e.keyCode === 37) {
			if (notGoingOutOfBounds("left")) {
				if (troll.size == 100) {
					posLeft -= 100;
				} else {
					posLeft -= 50;
				}
				trollIcon.style.left = posLeft + "px";
			}
		}
		if (e.keyCode === 39) {
			if (notGoingOutOfBounds("right")) {
				if (troll.size == 100) {
					posLeft += 100;
				} else {
					posLeft += 50;
				}
				trollIcon.style.left = posLeft + "px";
			}
		}
		drinkPotion();
		treasureChest();
		drinkPoison();
		falling();
	}
}

document.onkeydown = move;

var drinkPotion = function () {
	if ((posTop == 500 && posLeft == 200)) {
		if (confirm("do you want to drink this?")) {
			trollIcon.style.height = "50px";
			trollIcon.style.width = "50px";
			troll.size = 50
			alert("You have shrank!")
		}
	}
}

 var drinkPoison = function () {
	if ((posTop == 200 && posLeft == 0)|| (posTop == 300 && posLeft == 0)|| (posTop == 500 && posLeft == 100)|| (posTop == 500 && posLeft == 300)|| (posTop == 500 && posLeft == 400)) {
		if (confirm("do you want to drink this?")) {
			troll.health -= poison.damage
			alert("You have lost " + poison.damage + " health")
		}
	}
}

var treasureChest = function() {
	if (posTop == 50 && posLeft == 750) {
		treasureIcon.style.backgroundImage = "url('./imgs/TreasureChestOpen.png')";
		alert("You got the treasure!")
	};
} 

var isTrollAlive = function() {
	if (troll.health <= 0) {
		alert("You are dead!");
		return false;
	} else {
		return true;
	}
}
var falling = function () {
	if ( (posTop == 250 && posLeft == 500) || (posTop == 250 && posLeft == 550) || (posTop == 250 && posLeft == 600) || (posTop == 350 && posLeft == 500) || (posTop == 350 && posLeft == 550) || (posTop == 350 && posLeft == 600)) {
		trollIcon.style.height = "20px";
		trollIcon.style.width = "20px";
		troll.health = 0
		alert("You have fallen to your death!")
	}
}

// Refactored Code






// Reflection
//
//
//
/* Soooo ya, I kinda went overboard on this but I learned a ton about Javascript. It was a very long thing to wright mainly because of the boundries that I had to test for. The actions were easy and I might add more later. It would be interesting to create different levels and actions for him. Maybe even move the interaction out of the alert box and into a div that appears. Anyways, dont stay up too late playing the game. */
//
//
//
//
//