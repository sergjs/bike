function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');

		}
	});
}
ibg();

$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger, .header_b_1, .header_b_2, .header_b_3, .header_menu, .menu_list').toggleClass('active');
	});
});


