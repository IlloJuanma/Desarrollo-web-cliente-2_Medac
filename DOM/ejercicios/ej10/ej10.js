document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");

    
    div1.addEventListener("mouseover", function () {
        let backgroundColor = window.getComputedStyle(div1).getPropertyValue("background-color");
        document.body.style.setProperty("background-color", backgroundColor);
    });
    div2.addEventListener("mouseover", function () {
        let backgroundColor = window.getComputedStyle(div2).getPropertyValue("background-color");
        document.body.style.setProperty("background-color", backgroundColor);
    });
    div3.addEventListener("mouseover", function () {
        let backgroundColor = window.getComputedStyle(div3).getPropertyValue("background-color");
        document.body.style.setProperty("background-color", backgroundColor);
    });

    //Restaurar el color de fonde de la pantalla
    document.body.addEventListener("mouseout", function () {
        document.body.style.setProperty("background-color", "white");
    });
});