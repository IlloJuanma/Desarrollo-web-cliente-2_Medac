document.addEventListener('DOMContentLoaded', function () {
    /*btnderecha.addEventListener('click', function () {
        let foto = document.getElementsByTagName('img')[0];
        let estilo = window.getComputedStyle(foto);
        //Mover a la derecha

        //Obtengo el valor de left
        var valor_left = parseInt(estilo.getPropertyValue('left'));
        var valor_right = parseInt(estilo.getPropertyValue('right'));
        
        //Sumo 5px
        if(valor_left >=0){
            valor_left += 40;
            //Verificamos si la imagen no sale del margen derecho
            if(valor_left <= window.innerWidth - foto.offsetWidth){
                foto.style.setProperty('left', valor_left + "px");
            }
        }
        
    });

    btnizquierda.addEventListener('click', function () {
        let foto = document.getElementsByTagName('img')[0];
        let estilo = window.getComputedStyle(foto);
        //Mover a la izquierda

        //Obtengo el valor de left
        var valor_left = parseInt(estilo.getPropertyValue('left'));
        if (!valor_left == 0) {
            //Sumo 5px
            valor_left -= 40;
            //Asigno nuevo valor
            foto.style.setProperty('left', valor_left + "px");
        }
    });*/

    let foto = document.getElementsByTagName('img')[0];
    let enMov = false;

    foto.addEventListener('mouseover', function () {
        enMov = true;
    });
    foto.addEventListener('mouseout', function () {
        enMov = false;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (enMov) {
            let imagenLeft = parseInt(foto.style.getPropertyValue('left')) || 0;
            let mouseX = e.clientX;
            let imagenWidth = foto.clientWidth;
    
            if (imagenLeft + imagenWidth + 5 <= window.innerWidth) {
                foto.style.left = imagenLeft + 5 + 'px';
            }
        }
    });

    reset.addEventListener('click', function () {
        foto.style.setProperty('left', '0px');
    });




});