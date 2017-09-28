var btn = document.getElementById("menu");

function mostrarMenu() {
  var menu = document.getElementById("opcs-menu");
  //console.log(menu.classList.contains());

  if(menu.classList.contains("noActive")){
    menu.classList.remove("noActive");
  }
  else{
    menu.classList.add("noActive");
  }
}

btn.addEventListener("click", mostrarMenu);
