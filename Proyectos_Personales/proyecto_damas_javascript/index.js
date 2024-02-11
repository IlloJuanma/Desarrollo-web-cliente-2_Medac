
function main() {
    // Paso 1: Colocar las piezas
    // Paso 2: Poder hacer que se muevan las piezas y detectar los movimientos
    //disponibles
    // Paso 3: Desarrollar logica de comer piezas
    // Paso 4: Desarrollar logica de reinas
    colocarPiezasIniciales("os");
    colocarPiezasIniciales("cl");
    console.log(casillerosPosibles());
}
/*
fichaDOM.addEventListener("click", () =>
console.log("selected ficha" + fichaDOM.id)
);
*/

main();

// Crear pieza DOM
function colocarPieza(tipo, posicion, contador) {
    let clasePieza = "ficha";
    let id = "";
    switch (tipo) {
        case "os":
            clasePieza += " ficha-os";
            id = "os";
            break;
        case "cl":
            clasePieza += " ficha-cl";
            id = "cl";
            break;
        case "os-reina":
            clasePieza += " ficha-os ficha-reina";
            break;
        case "cl-reina":
            clasePieza += " ficha-cl ficha-reina";
            break;
    }
    const fichaDOM = document.createElement("div");
    fichaDOM.className = clasePieza;
    fichaDOM.id = id + "-" + contador;
    fichaDOM.style = "cursor: pointer;";

    // Colocar piezas en el DOM
    const selectorFila = ".fila-" + posicion[0];
    const selectorCasillero = ".casillero-" + posicion[1];

    const casilleroDOM = document
        .querySelector(selectorFila)
        .querySelector(selectorCasillero);
    casilleroDOM.appendChild(fichaDOM);
}

function colocarPiezasIniciales(tipoficha) {
    let contador = 1;
    const indiceFilaInicial = tipoficha === "os" ? 1 : 6;
    const indiceFilaFinal = indiceFilaInicial + 2;
    for (let i = indiceFilaInicial; i <= indiceFilaFinal; i++) {
        for (let j = 1; j <= 4; j++) {
            let restar = i % 2 === 1 ? 0 : 1;
            colocarPieza(tipoficha, [i, j * 2 - restar], contador);
            contador++;
        }
    }
}

function casillerosPosibles(){
    const ladoTablero = 8;
    const casilleros = [];
    for(let nroFila =1; nroFila <= ladoTablero; nroFila++){
        for(let nroColumna = 1; nroColumna <= ladoTablero; nroColumna++){
            if(!esPar(nroFila) && esPar(nroColumna)){
                casilleros.push("" + nroFila + nroColumna);
            }
            if(esPar(nroFila) && !esPar(nroColumna)){
                casilleros.push("" + nroFila + nroColumna);
            }
        }
    }
    return casilleros;
}
/**
 * Devuelve true si n es par, false si n es impar
 * @param {number} n
 */
function esPar(n){
    return n % 2 === 0;
}