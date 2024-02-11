document.addEventListener("DOMContentLoaded", function(){
    let texto = document.querySelector("h1");
    let boton = document.querySelector("input[type='button']");

    boton.addEventListener("click", function(){
        localStorage.visitas = 0;
        location.reload();
    });

    if(!localStorage.visitas) localStorage.visitas = 0;

    localStorage.visitas++;
    texto.textContent = "こんにちは！ - 訪問回数は" + localStorage.visitas + "回です！";

});