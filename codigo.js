$(document).ready(function () {

    //Flechas
    
    $('#arriba').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '-=100px'})
    });

    $('#abajo').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '+=100px'})
    });

    $('#izquierda').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({left: '-=100px'})
    });

    $('#derecha').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({left: '+=100px'})
    });

    $('#reset').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '120px', left: '0px'})
    });

    //Tamaño

    $('#normal').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '50%', width: '30%'})
    });

    $('#grande').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '+=100px', width: '+=100px'})
    });

    $('#chico').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '-=100px', width: '-=100px'})
    });

    //Visibilidad

    $('#mostrar').click(function (e) { 
        e.preventDefault();
        $('.imagen').show(4)
    });

    $('#esconder').click(function (e) { 
        e.preventDefault();
        $('.imagen').hide(4)
    });

});