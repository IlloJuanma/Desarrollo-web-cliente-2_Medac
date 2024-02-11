document.getElementsByName("copiar")[0].addEventListener("click",function() {
        var formu = document.querySelector("form");
        var texto = formu.elements[0].value;
        formu.elements[1].value = texto;              
 })



