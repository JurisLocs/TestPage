$(document).ready(function(){
    var id = (".active".id)
    $(".bankname").text(id) 
    $('.carousel').carousel({
        interval: false,
      });
    
    $(".bankas").click(function(){
        $(this).siblings('.bankas').removeClass('activeBank');
        $(this).addClass("activeBank");    


    })
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
        $("#myCarousel2").removeClass("inactive")
        $("#myCarousel").addClass("inactive")
        
        

    })

    $("#banka").click(function(){
        $("#myCarousel").removeClass("inactive")
        $("#myCarousel2").addClass("inactive")
        
    })
})
