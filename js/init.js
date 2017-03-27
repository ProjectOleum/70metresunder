(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  
    $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });


    $(document).ready(function(){
      $('.carousel').carousel();
    });

    // Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);

$('.carousel.carousel-slider').carousel({fullWidth: true});
        




var _interactiveMap = document.getElementById('interactive-map');

var interactiveMap = bodymovin.loadAnimation({
  container: _interactiveMap, // the dom element
  renderer: 'svg',
  loop: true,
  prerender: false,
  autoplay: true,
  autoloadSegments: false,
  path: '/js/data.json'
});

var intro = document.querySelector('.banner');
var introPlayer = document.querySelector('.banner__video');

	var options = [
		{
			selector: '.peakaboo-close', offset: 0, callback: function(el){

				$(el).find(".collapsible-header").removeClass(function(){
					return "active";
				});
				$(el).collapsible({accordion: true});
				$(el).collapsible({accordion: false});
				$(el).addClass("peakaboo-open");
 			    $(el).removeClass("peakaboo-close");

			}, repeat:true
		},
		{
			selector: '.peakaboo-open', offset: 200, callback: function(el){

				//console.log($(el));console.log($(".collapsible-header"));
				$(el).find(".collapsible-header").addClass("active");
 			    $(el).collapsible({accordion: false});
 			    $(el).addClass("peakaboo-close");
 			    $(el).removeClass("peakaboo-open");

			}, repeat:true
		},
		{
			selector: '.peakaboo-close', offset: 500, callback: function(el){

				//console.log($(el));console.log($(".collapsible-header"));
				$(el).find(".collapsible-header").removeClass(function(){
					return "active";
				});
				$(el).collapsible({accordion: true});
				$(el).collapsible({accordion: false});
				$(el).addClass("peakaboo-open");
 			    $(el).removeClass("peakaboo-close");

			}, repeat:true
		}


	];
	Materialize.scrollFire(options);
















/* stuff below for timeline items */
$('.dot:nth-child(1)').click(function(){
  $('.inside').animate({
    'width' : '5%'
  }, 500);
  $('article').removeClass('hactive');
  $('.one').addClass('hactive');
});
$('.dot:nth-child(2)').click(function(){
  $('.inside').animate({
    'width' : '15%'
  }, 500);
  $('article').removeClass('hactive');
  $('.two').addClass('hactive');
});
$('.dot:nth-child(3)').click(function(){
  $('.inside').animate({
    'width' : '25%'
  }, 500);
  $('article').removeClass('hactive');
  $('.three').addClass('hactive');
});
$('.dot:nth-child(4)').click(function(){
  $('.inside').animate({
    'width' : '35%'
  }, 500);
  $('article').removeClass('hactive');
  $('.four').addClass('hactive');
});
$('.dot:nth-child(5)').click(function(){
  $('.inside').animate({
    'width' : '45%'
  }, 500);
  $('article').removeClass('hactive');
  $('.five').addClass('hactive');
});
$('.dot:nth-child(6)').click(function(){
  $('.inside').animate({
    'width' : '55%'
  }, 500);
  $('article').removeClass('hactive');
  $('.six').addClass('hactive');
});
$('.dot:nth-child(7)').click(function(){
  $('.inside').animate({
    'width' : '65%'
  }, 500);
  $('article').removeClass('hactive');
  $('.seven').addClass('hactive');
});
$('.dot:nth-child(8)').click(function(){
  $('.inside').animate({
    'width' : '75%'
  }, 500);
  $('article').removeClass('hactive');
  $('.eight').addClass('hactive');
});
$('.dot:nth-child(9)').click(function(){
  $('.inside').animate({
    'width' : '85%'
  }, 500);
  $('article').removeClass('hactive');
  $('.nine').addClass('hactive');
});
$('.dot:nth-child(10)').click(function(){
  $('.inside').animate({
    'width' : '95%'
  }, 500);
  $('article').removeClass('hactive');
  $('.ten').addClass('hactive');
});




/* stuff above for timeline items */






/*

if ($('#switch1').not(':checked')){
 $('.modal').unwrap('<div class="mask"></div>');
    $('.modal').hide();
    $('.modal').addClass('nobox');
    $('.dot').click(function(){
    var modal = $(this).attr('id');
    $('article.nobox').hide()
    $('article.nobox.' + modal).fadeIn(200)
	});

    $('.dot').click(function(){
      var modal = $(this).attr('id');
      $('.mask').has('article.' + modal).fadeIn(300);
      $('.mask article.' + modal).fadeIn(0).animate({
        'top' : '50%'
      }, 300);
    });
}
$("#switch1").click(function(){
  if ($('#switch1').is(':checked')){
    $('.modal').unwrap('<div class="mask"></div>');
    $('.modal').hide();
    $('.modal').addClass('nobox');
    $('.dot').click(function(){
    var modal = $(this).attr('id');
    $('article.nobox').hide()
    $('article.nobox.' + modal).fadeIn(200)
	});
  } else {
    $('article').removeClass("nobox");
    $('.modal').wrap('<div class="mask"></div>')
    $('.mask').click(function(){
      $(this).fadeOut(300);
      $('.mask article').animate({
        'top' : '50%'
      }, 300)
    });

    $('.dot').click(function(){
      var modal = $(this).attr('id');
      $('.mask').has('article.' + modal).fadeIn(300);
      $('.mask article.' + modal).fadeIn(0).animate({
        'top' : '50%'
      }, 300);
    });
  }
})
*/








})(jQuery); // end of jQuery name space





