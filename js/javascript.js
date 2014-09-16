// RESPONSIVE DROP DOWN NAVIGATION
$(document).ready(function() {
	var n = '#resp-nav', no = 'nav-open';
	$('#nav-menu').on('click', function() {
		if ($(n).hasClass(no)) {
			$(n).animate({height:0},300);
			setTimeout(function() {
				$(n).removeClass(no).removeAttr('style');
			}, 320);
		} else {
			var new_height = $(n).css('height', 'auto').height();
			$(n).height(0).animate({height:new_height}, 300);
			setTimeout(function() {
				$(n).addClass(no).removeAttr('style');
			}, 320);
		}
	});
});

// LAME BUT WORKS
$(document).ready(function() {
	var n = '#portf-resp-nav', no = 'nav-open';
	$('#portf-nav-menu').on('click', function() {
		if ($(n).hasClass(no)) {
			$(n).animate({height:0},300);
			setTimeout(function() {
				$(n).removeClass(no).removeAttr('style');
			}, 320);
		} else {
			var new_height = $(n).css('height', 'auto').height();
			$(n).height(0).animate({height:new_height}, 300);
			setTimeout(function() {
				$(n).addClass(no).removeAttr('style');
			}, 320);
		}
	});
});

// SCROLL TOP
$(document).ready(function() {
	$('#top').on('click', function() {
		$('html, body').animate({scrollTop:0}, 600);
		return false;
	});
});