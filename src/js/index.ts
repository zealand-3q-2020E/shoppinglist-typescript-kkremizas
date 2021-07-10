//Write your Typescript code here

//////// Task 1

// Here we store the Element with Id=3 into a viariable of type HTMLIElement
let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("3");
// Here we show the variable myElement (reference to an Element) to the console
console.log("li element with id=3");
console.log(myElement);
console.log("----------------------");

let myListOfLiElements:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");
console.log("Collection of li elements with TagName=li");
console.log(myListOfLiElements);
console.log("----------------------");

let myListOfHealthyLiElements:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("healthy");
console.log("Collection of li elements with class=healthy");
console.log(myListOfHealthyLiElements);
console.log("----------------------");



//////// Task 2

console.log("Loop through Collection of li elements with class=healthy and print each element");

for (let index = 0; index < myListOfHealthyLiElements.length; index++) {
    const element = myListOfHealthyLiElements[index];
    console.log(element);
}
console.log("----------------------");

//////// Task 3

// Change apples from healthy to unhealthy

console.log("Make apples unhealthy from healthy");
let apples:HTMLLIElement = <HTMLLIElement> document.getElementById("3");
apples.setAttribute("class","unhealthy");
console.log(apples);
console.log("----------------------");

// Hide marshmallows

console.log("Hide Marshmallows");
let marshmallows:HTMLLIElement=<HTMLLIElement> document.getElementById("0");
//marshmallows.setAttribute("hidden","true");
console.log(marshmallows);
console.log("----------------------");

// Change all unhealthy foods to healthy

let myListOfUnhealthyLiElements:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");
console.log("Before the cleansing");
console.log(myListOfUnhealthyLiElements);

console.log("After the cleansing");
for (let index = 0; index < myListOfUnhealthyLiElements.length; index++) {
    const element = myListOfUnhealthyLiElements[index];
    element.setAttribute("class","healthy")
    }
    console.log(myListOfUnhealthyLiElements);
    console.log("----------------------");

//////// Task 4

// Get parent node of marshmallows (the whole list)
console.log("Get parent node of marshmallows (list)");
let parentNode:HTMLElement = <HTMLElement> document.getElementById("0").parentNode;
console.log(parentNode);
// Get first child of the list
console.log("Get first child of the list");
console.log(parentNode.firstElementChild);
// Get last child of the list
console.log("Get last child of the list");
console.log(parentNode.lastElementChild);

//////// Task 5

console.log("Add Brocoli in the end of the list")
let list:HTMLUListElement = <HTMLUListElement> document.getElementById("list");
var newElement = document.createElement("li")
newElement.setAttribute("id","10")
newElement.setAttribute("class","healthy")
var newElementText = document.createTextNode("Brocoli")
newElement.appendChild(newElementText)
list.appendChild(newElement)
console.log(list)

//////// Task 6

// Add Vodka in the beggining of the list
console.log("Add Vodka in the beggining of the list")
var newElement2 = document.createElement("li")
newElement2.setAttribute("id","7")
newElement2.setAttribute("class","unhealthy")
var newElement2Text = document.createTextNode("Vodka")
newElement2.appendChild(newElement2Text)
//list.appendChild(newElement2)
list.insertBefore(newElement2,list.lastChild)
console.log(list)

//////// Task 6

// Move all list items with class=unhealthy from list to new list with id=listUnhealthy

