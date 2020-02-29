describe("pressing the done button", function() {
	var nameField;
	var doneButton;
	var welcome;

	beforeAll(function(){
		nameField = $("<input type='text' class='name'>").appendTo("body");
		doneButton = $("<button class='done'>Done</button>").appendTo("body");
		welcome = $("<h1 id='welcome'></h1>").appendTo("body");
	});

	beforeEach(function(){
		welcome.text('');
	})

	it("displays welcome with first name from input when there is a Dr. prefix", function() {
		nameField.val('Dr. John Doe');
		doneButton.click();
		expect(welcome.text()).toBe("Welcome, John!");
	});

	it("displays welcome with first name from input when there is a Mr. prefix", function() {
		nameField.val('Mr. John Doe');
		doneButton.click();
		expect(welcome.text()).toBe("Welcome, John!");
	});

	it("displays welcome with first name from input when there is a Mrs. prefix", function() {
		nameField.val('Mrs. John Doe');
		doneButton.click();
		expect(welcome.text()).toBe("Welcome, John!");
	});

	it("displays welcome with first name from input when there is no prefix multiple words", function() {
		nameField.val('John Doe');
		doneButton.click();
		expect(welcome.text()).toBe("Welcome, John!");
	});

	it("displays welcome with first name from input when there is no prefix single word", function() {
		nameField.val('John');
		doneButton.click();
		expect(welcome.text()).toBe("Welcome, John!");
	});
});
