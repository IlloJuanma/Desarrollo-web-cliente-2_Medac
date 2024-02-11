var celdas = document.querySelectorAll("td");
let colores = ['red', 'green', 'blue', 'yellow', 'purple'];
let colorActual = 0; // Indice del color actual

celdas.forEach(function (celda) {
    celda.addEventListener('click', function () {
        celda.style.backgroundColor = colores[colorActual];
        colorActual = (colorActual + 1) % colores.length; 
        /* El modulo hace que vuelva a dar la vuelta
        cuando llega a 4 nos aseguramos con el % que divida por la cantidad
        total del array que en este caso es 4, asi el resultado da 0 y vuelve a
        empezar el array desde la posicion 0 */
        
        /*this.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        /*if(this.style.backgroundColor == 'black'){
            this.style.backgroundColor = 'white';
        }else{
            this.style.backgroundColor = 'black';
        }*/
    });
});