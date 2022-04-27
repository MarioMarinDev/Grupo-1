
// function saludar(nombre="desconocido", edad, lugar) {
//   let texto = "Mi nombre es " + nombre + ", ";
//   texto += "tengo " + edad + " años y ";
//   texto += "soy de " + lugar + ".";
//   return texto;
// }

// let mensaje = saludar("Mario", 26, "Veracruz");
// console.log(mensaje);

// Obtener por ID         document.getElementById();
// Obtener por etiqueta   document.getElementsByTagName();
// Obtener por clase      document.getElementsByClassName();
// Obtener por CSS        document.querySelector(); querySelectorAll();

const el_posters = document.querySelectorAll("div.poster");
const el_boton = document.getElementById("prueba");

el_boton.innerHTML = "<b class='rojo'><i>Texto</i></b>";












el_boton.addEventListener("mouseleave", cambiar_rojo);

function cambiar_rojo() {
  for(let i = 0; i < el_posters.length; i++) {
    el_posters[i].classList.add("rojo");
  }
}


