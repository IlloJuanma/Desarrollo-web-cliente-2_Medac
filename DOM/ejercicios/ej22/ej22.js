/*document.querySelector("img").addEventListener("click", function() {
    let img = "img/wick.jpg";
    let width = 1280; // Ancho de la ventana
    let height = 720; // Alto de la ventana
    let left = (screen.width / 2) - (width / 2); // Posicion
    let top = (screen.height / 2) - (height / 2); // Posicion

    let ventanaNueva = window.open(img, "ventana", `width=${width},height=${height},left=${left},top=${top}`);

    ventanaNueva.focus();
});*/

//Esto de antes lo que hace es crear una ventana nueva emergente//
document.addEventListener("DOMContentLoaded", function () {
    let imagen = document.querySelector(".imagen");
    let fondo = document.querySelector(".fondo");

    imagen.addEventListener("click", function () {
        let imagenAmpliada = document.createElement("img");
        
        imagenAmpliada.setAttribute("src","img/wick.jpg");
        imagenAmpliada.setAttribute("width","1240"+"px");
        imagenAmpliada.setAttribute("height","720"+"px");
        fondo.appendChild(imagenAmpliada);
        
        fondo.style.display = "flex";
        fondo.style.justifyContent = "center";
        fondo.style.alignItems = "center";
        document.body.style.overflow = "hidden";

    });
    fondo.addEventListener("click", function () {
        document.body.style.overflow = "auto";
        fondo.style.display = "none";
        let img = document.querySelectorAll("img")[1];
        fondo.removeChild(img);
    });

});