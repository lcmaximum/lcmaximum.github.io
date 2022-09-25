const body = document.getElementById("body");
const listDiv = document.getElementById("list");

function addItem() {
  let newItem = document.createElement("div");

  newItem.innerHTML = document.getElementById("box").value;
  newItem.onclick = toggleComplete;
  newItem.classList.add("incomplete-task");

  listDiv.appendChild(newItem);
  saveList();

  document.getElementById("box").value = "";
}

function clearList() {
  listDiv.innerHTML = "";
  saveList();
}

function toggleComplete() {
  if (this.style.textDecoration === "line-through") {
    this.style.textDecoration = "none";
  } else {
    this.style.textDecoration = "line-through";
  }
}

function removeItem() {
  console.log(this);
  listDiv.removeChild(this);
  saveList();
}

function saveList() {
  localStorage.storedList = listDiv.innerHTML;
}

function loadList() {
  listDiv.innerHTML = localStorage.storedList;
}

if (localStorage.storedList) {
  loadList();
}

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "gray";
}

function dayMode() {
  body.style.backgroundColor = "aliceblue";
  body.style.color = "black";
}

function markComplete() {
  const checkOffButtons = document.getElementsByClassName("mark-complete");

  for (let i = 0; i < checkOffButtons.length; i++) {
    let buttonItem = checkOffButtons[i].previousSibling;
    buttonItem.style.fontStyle = "italic";
    console.log(buttonItem.wholeText);
  }
}
