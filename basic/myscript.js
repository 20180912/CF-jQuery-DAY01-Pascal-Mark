/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
// $("p").css("background-color", "yellow");

// the p element with an ID of "intro"
// $("#intro").css("background-color", "yellow");

// all elements with a class of "note"
// $(".note").css("background-color", "yellow");

// all DIV elements with a class of note
//$("div.note").css("background-color", "yellow");

// all p elements in the article element
// $("article p").css("background-color", "yellow");

// the last element in any section which is a p tag
// $("p:last").css("background-color", "yellow");

// the first paragraph on the page
// $("p:first").css("background-color", "yellow");

// all p elements which have a link
// $("p [href]").css("background-color", "yellow");

// the second li within nested ul element
// $("ul ul li:nth-child(2)").css("background-color", "yellow");

// every second and third p element

// This works but requires two 
$("p").filter(function(a){return ((a%3 == 0||a%2==0) && a!=0);}).css("background-color", "yellow");
// $("p:nth-of-type(2n)") only works within each element, not across all elements