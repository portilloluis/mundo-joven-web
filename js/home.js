$(document).ready(function(){
     var filtrosContainer = $("#vuelos .filtrosContainer")

    //Ver Opciones avanzadas en el buscador de vuelos
    $("#verOpciones").click(function( e ){
        e.preventDefault()
        filtrosContainer.toggle(500)
    })

    //Activa carrusel principal
    $('#carruselHome').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    $('#carruselHome').mouseout( function (){
       $(this).trigger('play.owl.autoplay',[4000])
    })
    $('#carruselHome').mouseover( function (){
       $(this).trigger('stop.owl.autoplay')
    })
    
    //Activa carrusel de promociones 
    $('#promociones').owlCarousel({
        items: 3,
        loop: true,
        lazyLoad: true,
        margin: 10
    });

    //Activa y desactiva Tooltip en general
    $(".inputViajeros, .inputLugares, #habitacionesPaquete, #pasajerosSeguros").focus(function (){
        var padre = $(this).parent();
        var tooltip = padre.children(".tooltipElement")
        tooltip.slideDown(500)
    })
    $(".listo, .cerrarTooltip .fa-times").click(function ( e ){   
        e.preventDefault()
        $(this).parent().parent().slideUp(300)
    })
    $(".tooltipLugares").click( function ( e ) {
        if(e.target.localName == "li"){
            $(this).closest( ".tooltipLugares").slideUp(300)
        }
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

    //Activa o desactiva el cuadro de edad de conductor en el tab de auto
   $("#checkBoxEdadConductor").click(function(){
       $("#conductorEdad").toggle("slow")
   })

   //Previene que los botones del tooltip de pasajeros hagan que recargue el sitio
   $(".controlPasajeros").submit(function( e ){
        e.preventDefault
   })

   //Activa el modal

   $("#modalPrendido").click(function(){
        $('#modalDestino').modal()
   })


  
  

});