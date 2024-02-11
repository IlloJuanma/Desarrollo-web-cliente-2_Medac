document.addEventListener("DOMContentLoaded", function(){
    let formu = document.getElementById("miFormulario");
    formu.addEventListener("submit", function(e){
        // Evitar el envio
        e.preventDefault();

        // Obtener los valores del formulario
        let nombre = document.getElementById("nombre").value;
        let clave = document.getElementById("clave").value;

        // Almacenar los datos en el localStorage
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("clave", clave);

        // Limpiar el formulario despues de guardar
        formu.reset();
    });
});