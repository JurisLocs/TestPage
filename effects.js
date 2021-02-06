$(document).ready(function(){
    $('.carousel').carousel({
        interval: false,
      });
    
    $(".bankas").click(function(){
        $(this).siblings('.bankas').removeClass('activeBank');
        $(this).addClass("activeBank");
        if($('#banka').hasClass('activeBank')){
            ('#myCarousel').removeClass('.inactive');
            ('#myCarousel2').addClass('.inactive');
        } else {
            ('#myCarousel2').removeClass('.inactive');
            ('#myCarousel').addClass('inactive');
        }


    })
})