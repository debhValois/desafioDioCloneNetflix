var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:false, // deixa o carrossel rodando sem trava
    nav:false, // brns extras de navegação
    margin:5, // espaço entre as fotos
    responsive:{ // define nº de itens p cada size de tela
        0:{
            items:1
        }, 
        230:{
            items:2
        }, 
        350:{
            items:2
        }, 
        400:{
            items:3
        },  
        500:{
            items:3
        },  
        600:{
            items:4
        }, 
        700:{
            items:5
        }, 
        800:{
            items:6
        },            
        900:{
            items:6
        },
        1200:{
            items:7
        }
    }
});

// Mousewheel = ativa o carrossel pelo scroll do mouse
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
