$(document).ready(function(){
     var filtrosContainer = $("#vuelos .filtrosContainer")

    //Ver Opciones avanzadas en vuelos
    $("#verOpciones").click(function( e ){
        e.preventDefault()
        filtrosContainer.toggle(500)
    })

    //Activa carrusel de promociones 
    $('#promociones').owlCarousel({
        items: 3,
        loop: true,
        lazyLoad: true,
        margin: 10
    });

    //Activa y desactiva Tooltip de viajeros
    $(".inputViajeros").focus(function (){
        var padre = $(this).parent();
        var tooltip = padre.children(".tooltipElement")
        tooltip.slideDown(500)
    })
    $(".listo").click(function ( e ){   
        e.preventDefault()
        $(this).parent().parent().slideUp(300)
    })

    $("#radioVueloRedondo").click(function () {
        $("#formVueloRedondo").slideDown( 300 , function (){
            $("#formVueloSencillo").slideUp(100)
            $("#formVueloArma").slideUp(100)
        })
        
        
    })

    $("#radioVueloSencillo").click(function () {
        $("#formVueloSencillo").slideDown( 300 , function () {
            $("#formVueloRedondo").slideUp(100)
            $("#formVueloArma").slideUp(100)
        })
        
        
    })

    $("#radioVueloArma").click( function () {
        $("#formVueloArma").slideDown( 300 , function () {
            $("#formVueloSencillo").slideUp(100)
            $("#formVueloRedondo").slideUp(100)
        })
        
        
    })
});