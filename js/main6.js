const toDoInput = document.getElementById("newToDo");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener('click', () => {
    const toDoText = toDoInput.value;

    if (toDoInput !== "" || toDoInput !== " ") {

        const toDoItem = document.createElement("li");
        toDoItem.innerText = toDoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";

        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            toDoItem.remove();
        })

        toDoItem.appendChild(deleteBtn);
        list.appendChild(toDoItem);
        toDoInput.value = "";
    }

})