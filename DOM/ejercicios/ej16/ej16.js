document.addEventListener("DOMContentLoaded", function () {
    let descargar = document.querySelectorAll("button")[0];
    let cargar = document.querySelectorAll("button")[1];
    let timerM;
    let timerP;
    descargar.addEventListener("click", function () {
        let meter =document.getElementsByTagName("meter");
        meter[0].max="500";
        timerM = setInterval(function () {
            if(meter[0].value == 500){
                clearInterval(timerM);
                alert("Completado la descarga");
                //Crear tipo de nodo
                let nuevo = document.createElement("img");
                //Colocar atributos
                nuevo.setAttribute("src","img/ok.jpg");
                nuevo.setAttribute("alt","ok");
                let padre = nuevo.parentNode;
                padre.appendChild(nuevo);
                
                descargar.disabled = false;
            }else{
                descargar.disabled = true;
                meter[0].value = meter[0].value + 100;
            }  

            descargar.disabled=true;
        },1000)
       
    });
    
    cargar.addEventListener("click", function () {
        let progress = document.getElementsByTagName("progress");
        progress[0].max = "1000";
        timerP = setInterval (function() {
            if(progress[0].value === 1000){
                clearInterval(timerP);
                alert("Completado la carga");
                cargar.disabled = false;
            }else{
                cargar.disabled = true;
                progress[0].value = progress[0].value + 85;
            }
            cargar.disabled=true;

        }, 2000);


    });

});