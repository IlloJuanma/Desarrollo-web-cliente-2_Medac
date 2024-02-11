document.addEventListener("DOMContentLoaded", function () {
    //Obtenemos referncias al formulario
    let formulario = document.forms.formulario;
    let partes = formulario.nacimiento.value.split("/");
    let elementoErroneo = null;

    // Funcion para mostrar error
    function mostrarError(mensaje) {
        alert("Error: " + mensaje);
    }

    //Funcion nombre---------------------------------------------
    function validarNombre(nombre) {
        //partimos y contamos palabras, antes trim para quitar espacios al principio y al final
        let palabras = nombre.trim().split(" ");
        return palabras.length;
        //Esta funcion devolverá el tamaño de palabras de nombre
    }

    //Funcion apellidos------------------------------------------
    function validarApellidos(apellidos) {
        let palabras = apellidos.trim().split(" ");
        return palabras.length >= 1 && palabras.length <= 2;
    }

    //Funcion fecha de nacimiento--------------------------------
    function validarFecha(fecha) {
        //La fecha es tipo date asi que nos dara un array al separarlas
        let partes = fecha.split("/");

        if (partes.length !== 3) {
            return false;
        }

        // Obtener el año actual
        let añoActual = new Date().getFullYear();


        //Convertimos cada parte de la fecha, que es un string, en numero decimal
        let dia = parseInt(partes[0]);
        let mes = parseInt(partes[1]);
        let año = parseInt(partes[2]);
        // Verificamos si el año esta bien
        if (año < añoActual - 100) {
            return false;
        }
        //Usamos el 10 como segundo argumento, para transformarlo en base decimal
        //Por defecto suele hacerlo, pero es buena practica ponerlo

        //Si todo esta bien
        return dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12;
    }

    //Funcion webPersonal-----------------------------------------
    function validarWebPersonal(web) {
        //Al no poder usar RegExp, usamos un string para validar el inicio
        let inicio = "https://www.";
        return web.startsWith(inicio) && web.length >= inicio.length + 3;
        //Usamos +3, porque por norma, el final siempre tiene 3 letras (.com .org .net)
    }

    //Vamos a limpiar el formulario al pulsar el boton reset


    // function resetearCampos() {
    //     //Obtenemos referencia
    //     let elementos = formulario.elements;

    //     //Iteramos sobre los elementos
    //     for (var i = 0; i < elementos.length; i++) {
    //         var elemento = elementos[i];

    //         //Comprobamos si es un campo de entrada y no un boton
    //         if (elemento.type !== "button") {
    //             elemento.value = "";
    //         }
    //     }
    // }

    //Vamos a validar ahora todos los datos---------------------------
    function validarFormulario() {
        //Para elegir el elemento erroneo y darle focus, creamos una variable null para ello
        
        if (!formulario.dni.value || formulario.dni.value.length !== 9
            || isNaN(formulario.dni.value.substring(0, 8))
            || !isNaN(formulario.dni.value.charAt(8))) {
            mostrarError("El DNI no es válido.");
            if (!elementoErroneo) {
                elementoErroneo = formulario.dni;
                console.log("error")
            }
            return false;
        }
        if (!formulario.nombre.value || !validarNombre(formulario.nombre.value)) {
            mostrarError("El nombre no es válido");
            if (!elementoErroneo) {
                elementoErroneo = formulario.nombre;
                console.log("error")
            }
            return false;
        }
        if (!formulario.apellidos.value || !validarApellidos(formulario.apellidos.value)) {
            mostrarError("El apellido no es válido");
            if (!elementoErroneo) {
                elementoErroneo = formulario.apellidos;
                console.log("error")
            }
            return false;
        }
        if (!formulario.nacimiento.value || !validarFecha(formulario.nacimiento.value)) {
            mostrarError("La fecha no es válida");
            if (!elementoErroneo) {
                elementoErroneo = formulario.nacimiento;
                console.log("error")
            }
            return false;
        }
        console.log(formulario.web);
        if (!formulario.web.value || !validarWebPersonal(formulario.web.value)) {
            mostrarError("La web no es válida");
            if (!elementoErroneo) {
                elementoErroneo = formulario.web;
                console.log("error")
            }
            return false;
        }
        if (!formulario.pass.value || formulario.pass.value.length < 8 || formulario.pass.value.length > 12) {
            mostrarError("La contraseña no es válida, debe tener entre 8 y 12 caracteres");
            if (!elementoErroneo) {
                elementoErroneo = formulario.pass;
                console.log("elementoErroneo")
            }
            return false;
        }
        return true;
    }

    // Agregar y prevenir evento del boton enviar
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validarFormulario()) {
            alert("Todo correcto, enviando formulario...");
            //Para enviar a otr pagina, podemos usar window.location.href
            window.location.href = "formuOK.html";
        } else {
            if (elementoErroneo) {
                elementoErroneo.focus();
            }
            alert("El formulario no es valido, revisa los datos.")
        }
    });

});