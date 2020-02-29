$(registerClick);

function registerClick() {
	$("body").on('click', 'button.done', handleClick);
}

function handleClick(){
	var name = getName();
	var firstName = parseName(name);
	var greeting = createGreeting(firstName);
	displayGreeting(greeting);
}

function displayGreeting(greeting){
	$("#welcome").text(greeting);
}

function getName(){
	return $(".name").val();
}

function parseName(name){
	var firstName;
	var nameParts = name.split(" ");
	if(startsWithPrefix(nameParts)) {
		firstName = nameParts[1];
	}
	else{
		firstName = nameParts[0];
	}
	return firstName;
}

function startsWithPrefix(nameParts) {
	return nameParts[0] == "Mr." || nameParts[0] == "Mrs." || nameParts[0] == "Dr.";
}

function createGreeting(firstName){
	return "Welcome, " + firstName + "!";
}