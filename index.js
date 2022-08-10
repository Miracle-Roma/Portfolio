let main = document.getElementById("main");

let change = document.getElementById("change");

let liskil = document.getElementById("liskil");
// let image = document.getElementsByClassName("image")

function changeEvent() {
    changeBackground();
}

function changeBackground() {
    main.classList.toggle("active");
}


change.addEventListener("click", changeEvent);

