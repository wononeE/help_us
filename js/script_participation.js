$(function(){
    $('.modal').hide();
    $('.glasses_blue').click(function(){
        $('.modal').show();
    });
    $('.close_btn').click(function(){
        $('.modal').hide();
    });
    $('.light_bulb_off').hide();
    $('.off_btn').hide();
    
    $('.on_btn').click(function(){
        $('.on_btn').fadeOut();
        $('.off_btn').fadeIn();
        $('.light_bulb_on').fadeOut();
        $('.light_bulb_off').fadeIn();
    });
    $('.off_btn').click(function(){
        $('.off_btn').fadeOut();
        $('.on_btn').fadeIn();
        $('.light_bulb_off').fadeOut();
        $('.light_bulb_on').fadeIn();
    });
  });