$(document).ready(function () {
  $('.lazy').Lazy();

  // navbar
  window.addEventListener("scroll" , function(){
    if(window.pageYOffset != 0)
      $('.navbar').css("background-color" , "#ffffffe6");
    else
      $('.navbar').css("background-color" , "transparent");
  })

  $('.clients-slider__content').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    rtl: true,
    dots: false,
    autoHeight: true,
    lazyLoad:true,
    stagePadding: 0,
    navText: [
      "<i class='fa fa-chevron-right slider-icon slider-icon--colors'></i>",
      "<i class='fa fa-chevron-left slider-icon slider-icon--colors'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      600: {
        items: 2,
        dots: true,
      },
      1000: {
        nav: true,
        items: 4,
        margin: 50,
      },
    },
  });

  // for filter
  $('.filter input[type="radio"]').click(function () {
		$("div[data-related].active").removeClass("active").fadeOut(500, () => {
			if (this.id === "all")
				$("div[data-related]").fadeIn(500).addClass("active");
			else
				$(`div[data-related = "${this.id}"]`).fadeIn(500).addClass("active");
		});
	});

  // for video popup
  let video_modal  = $(".popup-window")
  let video_iframe = $(".popup-window iframe")
  let close_iframe = $(".popup-window i")
  let gallery_videos  = $(".videos__video"); // for video gallery
  let watchVideo_btn  = $(".watchVideo_btn"); // for video popup


  gallery_videos.click(show_form);
  watchVideo_btn.click(show_form);
  close_iframe.click(hide_modal);
  video_modal.click(hide_modal);

  function show_form(e){
    e.preventDefault();
    let video_src = $(this).attr("data-src");
    $(video_iframe).attr("src" , video_src);
    $(video_modal).css("display" , "flex");
    $("body").css("overflowY" , "hidden")
    $(video_modal).fadeIn(500);
  }

  function hide_modal(e){
    e.preventDefault();
    $(video_modal).fadeOut(500 ,function(){
      $("body").css("overflowY" , "auto");
    });
    $(video_iframe).attr("src" , "");

  }
})