var foto = document.querySelector("img");
var fotoMasi = "masi.jpg";
var fotoillojuan = "illojuan.jpg";

function cambiarFoto(nueva) {
    foto.src = nueva;
}

foto.addEventListener("mouseover", function(){
    cambiarFoto(fotoillojuan);
});
foto.addEventListener("mouseout", function(){
    cambiarFoto(fotoMasi);
});