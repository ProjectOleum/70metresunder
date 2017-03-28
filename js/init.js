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
        



/*
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
*/
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
















/*FIRST stuff below for timeline items */
$('.dot:nth-child(1)').click(function(){
  $('.inside').animate({
    'width' : '5%'
  }, 500); 
  $('article').removeClass('hactive');
  $('article').removeClass('prior');
  $('.one').addClass('hactive');
  $('article').addClass('post');
});

/*SECOND add post to 3-10 prior t 1*/
$('.dot:nth-child(2)').click(function(){
  $('.inside').animate({
    'width' : '15%'
  }, 500);
  $('article').removeClass('hactive');
  $('.two').addClass('hactive');
  $('.one').addClass('prior');
  $('article').addClass('post');
  $('.one').removeClass('post');
});

/*THIRD add post to 4-10 prior to 1 + 2*/
$('.dot:nth-child(3)').click(function(){
  $('.inside').animate({
    'width' : '25%'
  }, 500);
  $('article').removeClass('hactive'); 		/* remove active element all together */
  $('article').removeClass('prior');		 /* remove prior element all together */
  $('article').addClass('post');		 	/* Add post element to all */
  $('.three').addClass('hactive'); 			/* set the current selected to active */
  $('.three').removeClass('post');		 	/* remove post element from current selected and prior elements*/
  $('.two').removeClass('post');			
  $('.one').removeClass('post');
  $('.two').addClass('prior');				/* add prior class to one and two */
  $('.one').addClass('prior');				
});

/*FOUR add post to 5-10 add prior to 1-3 */
$('.dot:nth-child(4)').click(function(){
  $('.inside').animate({
    'width' : '35%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('article').addClass('post');
  $('.four').addClass('hactive');
  $('.four').removeClass('post');
  $('.one').addClass('prior');
  $('.one').removeClass('post');
  $('.two').addClass('prior');
  $('.two').removeClass('post');
  $('.three').addClass('prior');
  $('.three').removeClass('post');
});


/*FIVE add post to 6-10 add prior to 1-4*/
$('.dot:nth-child(5)').click(function(){
  $('.inside').animate({
    'width' : '45%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('.five').addClass('hactive');
  $('.one').addClass('prior');
  $('.two').addClass('prior');
  $('.three').addClass('prior');
  $('.four').addClass('prior');
  $('.six').addClass('post');
  $('.seven').addClass('post');
  $('.eight').addClass('post');
  $('.nine').addClass('post');
  $('.ten').addClass('post');
});

/* Six add post to 7-10 add prior to 1-5 */
$('.dot:nth-child(6)').click(function(){
  $('.inside').animate({
    'width' : '55%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('.one, .two, .three, .four, .five').addClass('prior');
  $('six').removeClass('prior');  
  $('.six').addClass('hactive');
  $('.seven, .eight, .nine, .ten').addClass('post');
});
$('.dot:nth-child(7)').click(function(){
  $('.inside').animate({
    'width' : '65%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('.seven').addClass('hactive');
  $('.one, .two, .three, .four, .five, .six').addClass('prior');
  $('.eight, .nine, .ten').addClass('post');
});

$('.dot:nth-child(8)').click(function(){
  $('.inside').animate({
    'width' : '75%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('.eight').addClass('hactive');
  $('.one, .two, .three, .four, .five, .six, .seven').addClass('prior');
  $('.nine, .ten').addClass('post');
});

$('.dot:nth-child(9)').click(function(){
  $('.inside').animate({
    'width' : '85%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('article').removeClass('prior');
  $('.nine').addClass('hactive');
  $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('prior');
  $('.ten').addClass('post');
});
$('.dot:nth-child(10)').click(function(){
  $('.inside').animate({
    'width' : '95%'
  }, 500);
  $('article').removeClass('hactive');
  $('article').removeClass('post');
  $('.ten').addClass('hactive');
  $('article').addClass('prior');
  $('.ten').removeClass('prior');
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


// perPage accepts two kind of data as a value

// Number:
// fixed amount of slider for all resolutions

// example:
// const mySiema = new Siema({
//   perPage: 2,
// });


// Object
// more complex configuration allows you to specify
// number of slides dependable of browsers viewport
// example below show single slide on small viewpoer
// 2 slider on scrrens wider than 768px
// 3 slider on scrrens wider than 1024px

// example:
// const mySiema = new Siema({
//   perPage: {
//     768: 2,
//     1024: 3,
//   },
// });





