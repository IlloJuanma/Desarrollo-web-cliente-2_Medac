document.addEventListener("DOMContentLoaded", function() {
    /* evento que se dispara cuando el DOM de una pagina ha sido cargado
    y construido y se pueden manejar de manera segura*/
    let tabla = document.querySelector("table");
    let alineacion = tabla.getAttribute("align");

    document.getElementById("btnAnchuraAltura").addEventListener("click", function() {
        let nuevaAnchura = prompt("Introduce una nueva anchura (en px):");
        let nuevaAltura = prompt("Introduce una nueva altura (en px):");
        tabla.setAttribute("width", nuevaAnchura + "px");
        //tabla.style.width = nuevaAnchura + "px";
        tabla.setAttribute("height", nuevaAltura + "px");  
        //tabla.style.height = nuevaAltura + "px";
    });

    document.getElementById("btnBorde").addEventListener("click", function() {
        let nuevoBorde = prompt("Introduce un nuevo valor de borde:");
        tabla.setAttribute("border", nuevoBorde + "px solid black");
        //tabla.style.border = nuevoBorde + "px solid black";
    });

    document.getElementById("btnAlineacion").addEventListener("click", function() {
        if (alineacion === "center") {
            alineacion = "right";
        } else if (alineacion === "right") {
            alineacion = "left";
        } else {
            alineacion = "center";
        }
        tabla.setAttribute("align", alineacion);
    });
});
