(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper')

	if (browser.canUse('transition')) {

		var resizeTimeout

		$window.on('resize', function() {

			window.clearTimeout(resizeTimeout)

			$body.addClass('is-resizing')

			resizeTimeout = window.setTimeout(function() {
				$body.removeClass('is-resizing')
			}, 100)
		})
	}

	var $panels = $('.panel')

	$panels.each(function() {

		var $this = $(this),
			$toggles = $('[href="#' + $this.attr('id') + '"]'),
			$closer = $('<div class="closer" />').appendTo($this)
	})

	var $header = $('#header')

	var $main = $('#main')

	// Thumbs.
	$main.children('.thumb').each(function() {

		var	$this = $(this),
			$image = $this.find('.image'), $image_img = $image.children('img'),
			x

			if ($image.length == 0)
				return
				$image.css('background-image', 'url(' + $image_img.attr('src') + ')')

				if (x = $image_img.data('position'))
					$image.css('background-position', x)

				$image_img.hide()
			})

	// Poptrox.
	$main.poptrox({
		baseZIndex: 20000,
		caption: function($a) {

			var s = ''

			$a.nextAll().each(function() {
				s += this.outerHTML
			})
			return s
		},
		fadeSpeed: 10,
		onPopupClose: function() { $body.removeClass('modal-active') },
		onPopupOpen: function() { $body.addClass('modal-active') },
		overlayOpacity: 0,
		popupCloserText: '',
		popupHeight: 150,
		popupSpeed: 300,
		popupWidth: 150,
		selector: '.thumb > a.image',
		usePopupCaption: true,
		usePopupDefaultStyling: false,
		usePopupNav: true,
		windowMargin: 50
	})
})(jQuery)
