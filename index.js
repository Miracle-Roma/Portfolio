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


////////////////////////////////////////////////
//Перейдите в директорию проекта: cd 
//Определите текущую директорию, как директорию репозитория:git init 
//Добавьте файлы в ваш новый локальный репозиторий, чтобы добавить файлы в первый коммит:git add .
//Киммит файлов, который вы добавили в коммит в ваш локальный репозиторий:git commit -c ""
//Отправка изменений локального репозитория в Git:git push origin tepadagini yozasan
