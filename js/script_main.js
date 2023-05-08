$(document).ready(function(){ 
  $('.header2_wrap').hide();
// Header scroll class
$(window).scroll(function() {
 if ($(this).scrollTop() > 100) {
   $('#fixed').addClass('header-scrolled');
   $('.header1_wrap').fadeOut(0);
   $('.header2_wrap').fadeIn(0);
 } else {
   $('#fixed').removeClass('header-scrolled');
    $('.header2_wrap').fadeOut(0);
   $('.header1_wrap').fadeIn(0);
 }
})
});

$(function(){
  $('.modal').hide();
  $('.glasses').click(function(){
      $('.modal').show();
  });
  $('.glasses2').click(function(){
      $('.modal').show();
  });
  $('.close_btn').click(function(){
      $('.modal').hide();
  });
});

$(function(){
  $('.animal_textbox').hide();
  $('.click1').click(function(){
      $('.box1').fadeToggle(500);
  });
  $('.click2').click(function(){
      $('.box2').fadeToggle(500);
  });
  $('.click3').click(function(){
      $('.box3').fadeToggle(500);
  });
});