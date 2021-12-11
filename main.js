$(document).ready(function(){
    var color; 

    for(let i = 0, j = $(":root").css("--cantFilas"); i < j; i++){
        $(".tablero").append("<div class='fila'></div>");
    }
    
    for(let i = 0, j = $(":root").css("--cantColum"); i < j; i++){
        $(".fila").append("<p>.</p>");
    }
    
    colores();
    over();

    $(".dificultad").click(function(){
        $(".tablero").empty();
        $(":root").css("--cantFilas", 10);
        $(":root").css("--cantColum", 8);
        

        for(let i = 0, j = $(":root").css("--cantFilas"); i < j; i++){
            $(".tablero").append("<div class='fila'></div>");
        }
        
        for(let i = 0, j = $(":root").css("--cantColum"); i < j; i++){
            $(".fila").append("<p>.</p>");
        }

        $(":root").css("--anchoContenedor", "400px");
       colores();
       over();
    });  
});

function colores(){
    $(".fila:even p:even").css("background-color", "#a2d149");
    $(".fila:even p:odd").css("background-color", "#aad751");
    $(".fila:odd p:odd").css("background-color", "#a2d149");
    $(".fila:odd p:even").css("background-color", "#aad751");
}

function over(){
    $("p").hover(function(){
        color = $(this).css("background-color");
        $(this).css("background-color", "#bee17d");
      },
      function(){
        $(this).css("background-color", color);
    });
}