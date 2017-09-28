var btn = document.getElementById("menu");

function mostrarMenu() {
  var menu = document.getElementById("opcs-menu");
  var propCSS = window.getComputedStyle(menu).getPropertyValue("display");
//  console.log(propCSS);

  if(propCSS == "none"){//menu.style.display  == "none" || menu.style.display  == ""
    //console.log("mostrar");
    //window.getComputedStyle(menu,"display").setPropertyValue("block");
    menu.style.display = "block";
  }
  else{
    //console.log("ocultar");
    menu.style.display = "none";
  }
}

btn.addEventListener("click", mostrarMenu);
