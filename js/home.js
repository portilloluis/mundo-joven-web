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

    //Cambia el formulario en el tabs de vuelos, dependiendo si eligen sencillo, redondo y arma tu paquete
    $("#radioVueloRedondo").click(function () {
        $("#formVueloSencillo, #formVueloArma").css({"position": "absolute"}).fadeOut(300)
        $("#formVueloRedondo").fadeIn().css({"position": "relative"})
         
    })

    $("#radioVueloSencillo").click(function () {
        $("#formVueloRedondo, #formVueloArma").css({"position": "absolute"}).fadeOut(300)
        $("#formVueloSencillo").fadeIn().css({"position": "relative"})
        
    })

    $("#radioVueloArma").click( function () {
        $("#formVueloSencillo, #formVueloRedondo").css({"position": "absolute"}).fadeOut(300)
        $("#formVueloArma").fadeIn().css({"position": "relative"})
    })

    //Acrtiva o desactiva el cuadro de edad de conductor en el tab de auto

   $("#checkBoxEdadConductor").click(function(){
       $("#conductorEdad").toggle("slow")
   })
});