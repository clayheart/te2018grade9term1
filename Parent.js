const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log("No video games for the rest of the week. Go finish that homework.");

	}

}

let dog = READLINE.question("Did you take the dog out? ");
if(dog == "no") {
	console.log("Go take the dog out he has to pee.");
}
else {
	console.log("Good.");
}


let midterms = READLINE.question("Did you do good on your midterms? yes/no: ");

if(midterms == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go study! ");
	if(talkback == "no" || talkback == "never") {
		console.log("No video games for the rest of the week. Go finish that homework.");

	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go.");
}
else {
	console.log("Good.");
}

let chores = READLINE.question("Did you take out the trash? ");
if(chores == "no") {
	console.log("Go take that trash out.");
}
else {
	console.log("Good go get on that fortnite grind.");
}

let food = READLINE.question(" Wait did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
}

let sibling  = READLINE.question("Did your sibling get to play on the PS4? ");
if(sibling == "no") {
	console.log("let your sibling play.");
}
else {
	console.log("Good job.");
}

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);