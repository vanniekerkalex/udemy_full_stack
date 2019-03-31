var button = document.getElementById("enter");
var buttonDelete = document.getElementsByClassName("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("input");
	button.type = "button";
	button.value = "Delete";
	button.onclick = deleteListItem;
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneOnClick(event) {
	if (event.target.classList.contains('done')) {
		event.target.classList.remove('done');
	} else {
		event.target.classList.add('done');
	}
}

function deleteListItem(event) {
	console.log('Delete List Item');
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

buttonDelete.addEventListener("click", deleteListItem);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addDoneOnClick);