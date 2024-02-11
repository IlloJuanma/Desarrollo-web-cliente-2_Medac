document.addEventListener('DOMContentLoaded', function() {
    let divis = document.querySelectorAll("div");
    let empezar = document.querySelectorAll("button")[0];
    let reset = document.querySelectorAll("button")[1];
    let timer;
    let ganador=null;

    empezar.addEventListener('click', function() {
        //Solucion de la chati para q avance
        let distancias = Array.from(divis).map(() => 0);

        timer = setInterval(function(){
            divis.forEach((divi, index) =>{      
                if(distancias[index] <= 2350){
                    let mover = Math.floor(Math.random() * 100);
                    distancias[index] += mover;
                    divi.style.marginLeft = distancias[index] + "px";
                    
                }else{
                    // indica el primero que llegue
                    ganador = index;
                    //indica el nombre del ganador
                    let nombre = divi.querySelector("p").textContent;
                    //para el tiempo
                    clearInterval(timer);
                    alert(`Carrera Terminada! Ganador: ${nombre}`);
                }

                /*let mover = Math.floor(Math.random() * 10);
                if(divi.style.marginLeft !== "2450px"){
                    posicion += mover;
                    divi.style.marginLeft = posicion + "px";
                
                
                }else{
                    clearInterval(timer);
                    alert("Carrera Terminada!")
                }*/
            });

        },200)
    });
});

document.querySelectorAll("button")[1].addEventListener('click', function() {
    let divis = document.querySelectorAll("div");
    for (let i = 0; i < divis.length; i++) {
        divis[i].style.marginLeft = "0px";    
    }
});

/*
// ----FORMA SIN USAR SETINTERVAL QUE LO HACE MAS FLUID "requestAnimationFrame(funcion)"----
document.addEventListener('DOMContentLoaded', function() {
    let divis = document.querySelectorAll("div");
    let empezar = document.querySelectorAll("button")[0];
    let reset = document.querySelectorAll("button[value='reset']");
    let animacionId;
    let ganador = null;

    empezar.addEventListener('click', function() {
        let distancias = Array.from(divis).map(() => 0); // Inicializa las distancias en 0

        function animarDivs() {
            divis.forEach((divi, index) => {
                if (distancias[index] < 2450) {
                    let mover = Math.floor(Math.random() * 10);
                    distancias[index] += mover;
                    divi.style.marginLeft = distancias[index] + "px";

                    if (distancias[index] >= 2450 && ganador === null) {
                        ganador = index;
                        const nombreGanador = divi.querySelector("p").textContent;
                        alert(`El ganador es ${nombreGanador}!`);
                    }
                }
            });

            if (distancias.some(distance => distance < 2450)) {
                animacionId = requestAnimationFrame(animarDivs);
            } else {
                cancelAnimationFrame(animacionId);
                if (ganador === null) {
                    alert("La carrera terminó en empate.");
                }
            }
        }

        animarDivs();
    });
});*/
