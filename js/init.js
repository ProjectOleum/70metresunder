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
    
})(jQuery); // end of jQuery name space