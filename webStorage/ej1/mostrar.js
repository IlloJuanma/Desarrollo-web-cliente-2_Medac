document.addEventListener("DOMContentLoaded", function(){
    // Mostrar datos almacenados
    let nombre = document.getElementById("nombre");
    let clave = document.getElementById("clave");

    // Coger datos almacenados
    let nombreAlmacenado = localStorage.getItem("nombre");
    let claveAlmacenado = localStorage.getItem("clave");

    nombre.textContent = nombreAlmacenado || "No disponible";
    // Esto es el Operador de fusion nula. Si el valor de la izquierda es null
    // se le pondra el valor de la derecha

    clave.textContent = claveAlmacenado ? "***********" : "No disponible";
    // Este es el operador condicional ternario, evalua la condicion de la izquierda
    // del ?. Si es verdadera, se devuelve el valor de la izquierda de los :
    // sino, se devuelve el valor de la derecha de los :

    // Boton para borrar datos almacenados
    document.getElementById("borrarDatos").addEventListener("click", function(){
        localStorage.removeItem("nombre");
        localStorage.removeItem("clave");
    });
});