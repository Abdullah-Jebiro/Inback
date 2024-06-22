$(document).ready(function(){
  // service slider
  $('.service-slider__content').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    rtl: true,
    dots: false,
    autoHeight: true,
    lazyLoad:true,
    navText: [
      "<i class='fa fa-chevron-right slider-icon'></i>",
      "<i class='fa fa-chevron-left slider-icon'></i>",
    ],
    responsive: {
      0: {
        nav: false,
        items: 1,
        stagePadding: 20,
      },
      600: {
        items: 1,
        stagePadding: 20,
        nav: false,
      },
      1000: {
        items: 3,
      },
    },
  });


  // FAQ
  $('.faq__tabs__tab').click(function (e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		const sectionShow = $(this).attr('data-target');
		$(sectionShow)
			.addClass('active')
			.fadeIn()
			.siblings()
			.hide()
			.removeClass('active');
	});
})