$(document).ready(function() {
  	  $('body').addClass('js');
		  var $menu = $('.region-menu .menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.menuparent > a');

		$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
		});

		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});

		});
