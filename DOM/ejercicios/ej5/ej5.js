var parrafo = document.querySelector("p");

parrafo.addEventListener("click", function () {
    if (parrafo.classList.contains("uno")) {
        parrafo.classList.remove("uno");
        parrafo.classList.add("dos");
    } else {
        parrafo.classList.remove("dos");
        parrafo.classList.add("uno");
    }
});