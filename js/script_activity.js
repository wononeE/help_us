$(function(){
    $('.modal').hide();
    $('.glasses_blue').click(function(){
        $('.modal').show();
    });
    $('.close_btn').click(function(){
        $('.modal').hide();
    });
  });

$(function(){
	AOS.init();	
});