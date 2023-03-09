//Metodos para seleccionar los elemntos de HTML (queryselector...etc)

const h1 = document.querySelector("h1");
//const p = document.querySelector("p");
//const parrafito = document.querySelector(".parrafito");
//const pid = document.getElementById("pid");//se llama desde el ID sin necesidad de # (L39)
const input = document.querySelector("input");

//Console.log para imprimir todos y cada uno de las variables

//console.log({
    //h1,
    //p,
    //parrafito,
    //pid,
    //input
//})

//Modificar HTML desde js

//h1.innerHTML = "Patote <br> Feo"; //<br> es una etiqueta de html
//h1.innerText = "Patote <br> Feo"; //ejecuta literaltmente texto tambien imprimio "<br>"
//console.log(h1.getAttribute("class")) 
//h1.setAttribute("class", "rojo") //Modifica atributos

//h1.classList.add("rojo") //agrego clase adicional
//h1.classList.remove("rojo") //elimina clase 
//h1.classList.toggle("rojo") //agrega y quita la clase
//h1.classList.contains("rojo") //da false o true

//input.value = "777" //modifico el value 

//crear elemento desde cero

//const img = document.createElement("img");//creo imagen o cualquier etiqueta de HTML
//img.setAttribute("src", "https://www.sideshow.com/storage/product-images/910233/black-panther-deluxe_marvel_square.jpg")
//console.log(img) //aqui solo se muestra en consola

//pid.innerHTML = "";
//pid.append(img);//agregan contenido con el que ya esta
