document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementsByClassName("div")[0];
    var caja1 = document.getElementsByName("caja1")[0];
    var caja2 = document.getElementsByName("caja2")[0];
    var caja3 = document.getElementsByName("caja3")[0];
    var caja4 = document.getElementsByName("caja4")[0];
    var flotante = document.querySelector(".flotante");
    
    function moverDiv(e){
        flotante.style.display = "block";
        flotante.style.top = e.layerY - 25 + "px";
        flotante.style.left = e.layerX - 25 + "px";
        div.style.cursor = "none";
    }

    div.addEventListener("mousemove", function (e) {
        // Al usar un evento de raton, mousemove, el objeto "event" (e) contiene informacion
        // sobre la posicion del raton (tambien puede ser sobre teclas pulsadas, dependiendo del evento)
        // entre otras cosas. Proporciona detalles sobre el evento en sí.
        caja1.value = e.clientX + ',' + e.clientY;
        caja2.value = e.pageX + ',' + e.pageY;
        caja3.value = e.layerX + ',' + e.layerY;
        caja4.value = e.screenX + ',' + e.screenY;
        moverDiv(e);
    });

    div.addEventListener("mouseover", function(e){
        moverDiv(e);

    })

    div.addEventListener("mouseout", function (e) {
        caja1.value = 0 + "," + 0;
        caja2.value = 0 + "," + 0;
        caja3.value = 0 + "," + 0;
        caja4.value = 0 + "," + 0;
    });
});