$(document).ready(function(){
    var id = (".active".id)
    $(".bankname").text(id) 
    $('.carousel').carousel({
        interval: false,
      });
    

    $("#citadele").click(function(){       
        $(".bankname").text("Citadele") 
       
    })
    $("#citadele2").click(function(){       
        $(".bankname").text("Citadele") 
       
    })
    $("#swedbank").click(function(){       
        $(".bankname").text("Swedbank") 
       
    })
    $("#seb").click(function(){       
        $(".bankname").text("SEB") 
       
    })
    $("#luminor").click(function(){       
        $(".bankname").text("Luminor") 
       
    })
    $("#blueorange").click(function(){       
        $(".bankname").text("BlueOrange") 
       
    })

    $("#lombards").click(function(){
        $("#banka").removeClass('activeBank');
        $(this).addClass("activeBank"); 
        $("#myCarousel2").removeClass("inactive")
        $("#myCarousel").addClass("inactive")
        $("#myCarousel2").carousel(0);
        $(".bankname").text("Luminor") 

    })

    $("#banka").click(function(){
        $("#lombards").removeClass('activeBank');
        $(this).addClass("activeBank"); 
        $("#myCarousel").removeClass("inactive")
        $("#myCarousel2").addClass("inactive")
        $("#myCarousel").carousel(0);
        $(".bankname").text("Citadele")
    })
})
