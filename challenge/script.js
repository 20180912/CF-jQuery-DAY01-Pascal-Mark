var peopleArray = JSON.parse(people);
console.log(peopleArray)

$("body").append('<main></main>')
$("main").css({
    "display":"flex",
    "flex-flow": "row wrap",
    "justify-content": "center"
});
for (let index = 0; index < peopleArray.length; index++) {
    $("main").append(`<div id="div${index}">
    <img src=${peopleArray[index].image}.jpg></img><br>
    <label>${peopleArray[index].name}</label><br>
    <label>${peopleArray[index].relation}</label>
    </div>`)
}

for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        $(`#div${index}`).css("background-color","blue");
    } else {
        $(`#div${index}`).css("background-color","pink");
    }   
}

/*
var boxes = $("main > div");
for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        boxes[index].style.backgroundColor = "blue";
    } else {
        boxes[index].style.backgroundColor = "pink";
    }   
}
*/