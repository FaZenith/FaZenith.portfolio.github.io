function openSbcNav() {
    document.getElementById("sbc-nav").style.height = "100%";
}

function closeSbcNav() {
    document.getElementById("sbc-nav").style.height = "0%";
}

$(document).ready(function(){



   var section_items=$('.section'),
       navigation_items=$('#navigation a');

    updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

    navigation_items.on('click',function(event){
       event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('.scroll_down').on('click',function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
		section_items.each(function(){
			$this = $(this);
			var activeSection = $('#navigation a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigation_items.eq(activeSection).addClass('is-selected');
        console.log(activeSection);

        if (activeSection == '0') {
          changecolorB()
          $('#ac1').addClass('animated fadeIn');
          $('#ac1').removeClass('fadeOut');
        }
        else {
          $('#ac1').addClass('fadeOut');
        }
        if (activeSection == '1') {
          changecolorW()
          $('#ac2').addClass('animated fadeIn');
          $('#ac2').removeClass('fadeOut');
        }
        else {
          $('#ac2').addClass('fadeOut');
        }
        if (activeSection == '2') {
          changecolorB()
          $('#ac3').addClass('animated fadeIn');
          $('#ac3').removeClass('fadeOut');
          $('#bar01').addClass('barMain90U');
          $('#bar02').addClass('barMain70U');
          $('#bar03').addClass('barMain30U');
          $('#bar04').addClass('barMain90U');
          $('#bar05').addClass('barMain70U');
          $('#bar06').addClass('barMain70U');
          $('#bar07').addClass('barMain90U');
          $('#bar08').addClass('barMain80U');
          $('#bar09').addClass('barMain80U');
          $('#bar10').addClass('barMain60U');
          $('#bar11').addClass('barMain80U');
          $('#bar12').addClass('barMain90U');
          $('#bar13').addClass('barMain70U');
        } else {
          $('#ac3').addClass('fadeOut');
          $('#bar01').removeClass('barMain90U');
          $('#bar02').removeClass('barMain70U');
          $('#bar03').removeClass('barMain30U');
          $('#bar04').removeClass('barMain90U');
          $('#bar05').removeClass('barMain70U');
          $('#bar06').removeClass('barMain70U');
          $('#bar07').removeClass('barMain90U');
          $('#bar08').removeClass('barMain80U');
          $('#bar09').removeClass('barMain80U');
          $('#bar10').removeClass('barMain60U');
          $('#bar11').removeClass('barMain80U');
          $('#bar12').removeClass('barMain90U');
          $('#bar13').removeClass('barMain70U');
        }
        if (activeSection == '3') {
          changecolorW()
          $('#ac4').addClass('animated fadeIn');
          $('#ac4').removeClass('fadeOut');
        }
        else {
          $('#ac4').addClass('fadeOut');
        }
        if (activeSection == '4') {
          changecolorW()
          $('#ac5').addClass('animated fadeIn');
          $('#ac5').removeClass('fadeOut');
        }
        else {
          $('#ac5').addClass('fadeOut');
        }
        if (activeSection == '5') {
          changecolorW()
          $('#ac6').addClass('animated fadeIn');
          $('#ac6').removeClass('fadeOut');
        }
        else {
          $('#ac6').addClass('fadeOut');
        }
        if (activeSection == '6') {
          changecolorW()
          $('#ac7').addClass('animated fadeIn');
          $('#ac7').removeClass('fadeOut');
        }
        else {
          $('#ac7').addClass('fadeOut');
        }
        if (activeSection == '7') {
          changecolorB();
          $('#ac8').addClass('animated fadeIn');
          $('#ac8').removeClass('fadeOut');
        }
        else {
          $('#ac8').addClass('fadeOut');
        }



			}else {
				navigation_items.eq(activeSection).removeClass('is-selected');
			}


		});
	}

  function changecolorB(){
      $('#navigation #dotcolor').addClass('dotB');
      $('#navigation #dotcolor').removeClass('dotW');

      $('#navigation #labelcolor').addClass('labelB');
      $('#navigation #labelcolor').removeClass('labelW');
  }
  function changecolorW(){
      $('#navigation #dotcolor').addClass('dotW');
      $('#navigation #dotcolor').removeClass('dotB');

      $('#navigation #labelcolor').addClass('labelW');
      $('#navigation #labelcolor').removeClass('labelB');
  }

    function smoothScroll(target){
        $('body,html').animate(
            {'scrollTop':target.offset().top}
            ,600);
    }
});
