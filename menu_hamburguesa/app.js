console.log("Bienvenido");

var btn = document.getElementById("menu");
var menu = document.getElementById("opcs-menu");



function mostrarMenu() {
  //console.log("menu");
  menu.classList.toggle("mostrarMenu");
}

btn.addEventListener("click", mostrarMenu);
