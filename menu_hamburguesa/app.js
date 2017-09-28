var btn = document.getElementById("menu");

function mostrarMenu() {
  var menu = document.getElementById("opcs-menu");
  //console.log(menu.classList.contains());

  if (menu.classList.contains("disabled-menu")) {
    menu.classList.add("enabled-menu");
    menu.classList.remove("disabled-menu");
  } else {
    menu.classList.add("disabled-menu");
    menu.classList.remove("enabled-menu");
  }
}

btn.addEventListener("click", mostrarMenu);
