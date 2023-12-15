const clickBtn = document.getElementById("myBtn");
const container = document.querySelector(".container")

const h1El = document.createElement('h1');
h1El.innerText = "Pop-Over App";

const pEl = document.createElement('p');
pEl.innerText = "This is some random text here";

const closeButton = document.createElement('button');
closeButton.classList.add("btn");
closeButton.setAttribute("id", "closeBtn");
closeButton.innerText = "close";

clickBtn.addEventListener('click', function () {
    container.appendChild(h1El);
    container.appendChild(pEl);
    container.appendChild(closeButton);
    clickBtn.style.display = "none";
})


