// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, edge);
//  });

 // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
 // var collapsibleElem = document.querySelector('.collapsible');
 // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

 // Or with jQuery

 $(document).ready(function(){
   $('.sidenav').sidenav();
 });

  // document.addEventListener('DOMContentLoaded', function() {
  //     var elems = document.querySelectorAll('.parallax');
  //     var instances = M.Parallax.init(elems, options);
  //   });

    // Or with jQuery

    $(document).ready(function(){
      $('.parallax').parallax();
    });


    //Smooth Scrolling on Targets Starts
    $(document).ready(function() {
    		$('a[href*=#]').bind('click', function(e) {
    				e.preventDefault(); // prevent hard jump, the default behavior

    				var target = $(this).attr("href"); // Set the target as variable

    				// perform animated scrolling by getting top-position of target-element and set it as scroll target
    				$('html, body').stop().animate({
    						scrollTop: $(target).offset().top
    				}, 600, function() {
    						location.hash = target; //attach the hash (#jumptarget) to the pageurl
    				});

    				return false;
    		});
    });
