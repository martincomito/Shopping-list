
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}


function createDeleteButton(li){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("X"))	
	deleteButton.setAttribute("class", "btn deletebutton");

	li.appendChild(deleteButton);	

}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}

}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event){
	event.target.classList.toggle("done");
	if (event.target && event.target.matches("button")) {
		event.target.parentNode.parentNode.removeChild(event.target.parentNode)
	}
}

function buttonShows(){
	var b = document.getElementsByTagName("button");
	b.classList.toggle("deletebutton");
}


ul.addEventListener("click", toggleDone);
button.addEventListener("click", addListAfterClick);
button.addEventListener("mouseover", buttonShows); 
input.addEventListener("keypress", addListAfterKeypress);

