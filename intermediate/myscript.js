$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

// 1.Remove the form from the page
$("#myform").remove();

// 2. Create 5 new DIVs in the article element
for (let i = 0; i < 5; i++) {
	$("article").append('<div>new div</div>');
}

// 3. Within the input field change the value to "Search for..."
$("input").val("Search for...");

// 4. Add a class name of "box" to each new DIV
$("article div").attr("class", "newClass");
// alternatively: $("article div").toggleClass("newClass")

// 5. Change the link to "www.codefactory.wien"
$("a[href]").attr("href", "https://codefactory.wien/de/home/");