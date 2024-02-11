document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");

    /*div1.addEventListener("mouseover", function () {
        div2.style.visibility = "visible";
    });
    div1.addEventListener("mouseout", function () {
        div2.style.visibility = "hidden";
    });*/
    div1.addEventListener("mouseover", function () {
        div2.style.display = "inline-block";
        //div2.style.setProperty("display", "inline-block");
    });
    div1.addEventListener("mouseout", function () {
        div2.style.display = "none";
        //div2.style.setProperty("display", "none");
    });
});