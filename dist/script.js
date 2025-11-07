window.addEventListener("DOMContentLoaded", domLoaded);

// wire up handlers
function domLoaded() {
    const addBtn = document.getElementById("addBtn");
    const input = document.getElementById("taskInput");

    addBtn.addEventListener("click", addBtnClick);

    // pressing enter in the textbox
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

// add flow
function addBtnClick() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    // prevent empty tasks
    if (text.length === 0) {
        input.focus();
        return;
    }

    addTask(text);

    // clear and refocus
    input.value = "";
    input.focus();
}

// create item and wire remove
function addTask(newTask) {
    // Create new <li>
    const li = document.createElement("li");


    li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

    // append to <ol>
    const ol = document.querySelector("ol#taskList");
    ol.appendChild(li);

    const doneButtons = document.querySelectorAll(".done-btn");
    const lastBtn = doneButtons[doneButtons.length - 1];
    lastBtn.addEventListener("click", removeTask);
}

// remove the clicked task
function removeTask(event) {
    const li = event.target.parentNode;
    const ol = li.parentNode;
    ol.removeChild(li);
}