//Change all hrefs to new link
$("body [href]").attr("href", "https://www.codefactory.wien");

//change text color of code tag to red
$("code").css("color", "red");

//change background color to all li elements which are children of ol elements
$("ol > li").css("background-color", "#2a7b90");

//change form placeholder text
$("textarea").attr("placeholder" , "Your opinion here");

//Replace all images
$("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

//Change the background color to orange for all blockquote elements and the font-style to italic
$("blockquote").css({
	"background-color": "orange",
	"font-style": "italic"
});

//At the top of the page, change the logo color "Simple" to black and "Blog" to white
$("#logo").css("color","black");
$(".gray").css("color", "white");

//Remove the "Oct 01, 2006" Date from the page
$(".date").remove();

//Extend the Sidebar Menu with 3 additional items
$(".sidemenu:first li:last").after(
	`<li><a href='http://all-free-download.com/
	free-website-templates/'>New Templates</a></li>`,
	"<li><a href='http://all-free-download.com/free-website-templates/'>Order Templates</a></li>",
	"<li><a href='http://all-free-download.com/free-website-templates/'>Contact Us</a></li>"
	 );

//Change text of Wise Words
$("#sidebar > p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
