$(function() {
			// Clickable Dropdown
			$('.click-nav > ul').toggleClass('no-js js');
			$('.click-nav .js ul').hide();
			$('.click-nav .js').click(function(e) {
				$('.click-nav .js ul').slideDown(200);
				$('.clicker').toggleClass('active');
				e.stopPropagation();
			});
		});
