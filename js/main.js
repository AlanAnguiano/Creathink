$(document).ready(function(){
	var $posActual = $(window).scrollTop(0);
	var $win = $(window);
  	var $pos = 70;
  	$win.scroll(function () {
    	if ($win.scrollTop() > $pos)
       		$('#contMenu').addClass('color');
     	else if($win.scrollTop() <= $pos){
       		$('#contMenu').removeClass('color');
     	}
   	});

  	$('.ancla').on('click', function(e){
		e.preventDefault();
		var strAncla = '#' + $(this).data('ancla');
		$('html,body').animate({scrollTop: $(strAncla).offset().top}, 1000);
	});
})