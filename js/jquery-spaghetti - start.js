$(function(){
	$("body").on('click', 'button.done', function(){
		var name = $(".name").val();
		name = name.split(" ");
		if(name[0] == "Mr." || name[0] == "Mrs." || name[0] == "Dr.") {
			name.shift();
		}
		$("#welcome").text("Welcome, " + name[0] + "!");
	})
});