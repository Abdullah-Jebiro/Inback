$(document).ready(function() {
  // Initialize the service slider using OwlCarousel
  $('.service-slider__content').owlCarousel({
    loop: true, // Enable continuous looping
    margin: 0, // Set margin between items to 0
    nav: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    rtl: true, // Enable right-to-left mode
    dots: false, // Disable dots navigation
    autoHeight: true, // Adjust height automatically
    lazyLoad: true, // Enable lazy loading of images
    navText: [
      "<i class='fa fa-chevron-right slider-icon'></i>", // Custom right navigation arrow
      "<i class='fa fa-chevron-left slider-icon'></i>" // Custom left navigation arrow
    ],
    responsive: {
      0: {
        nav: false, // Hide navigation arrows on small screens
        items: 1, // Show 1 item on small screens
        stagePadding: 20 // Add padding on small screens
      },
      600: {
        items: 1, // Show 1 item on medium screens
        stagePadding: 20, // Add padding on medium screens
        nav: false // Hide navigation arrows on medium screens
      },
      1000: {
        items: 3 // Show 3 items on large screens
      }
    }
  });

  // Handle click events on FAQ tabs
  $('.faq__tabs__tab').click(function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    $(this).addClass('active').siblings().removeClass('active'); // Set clicked tab as active and remove active class from siblings
    const sectionShow = $(this).attr('data-target'); // Get the target section to show
    $(sectionShow)
      .addClass('active') // Set the target section as active
      .fadeIn() // Fade in the target section
      .siblings() // Get siblings of the target section
      .hide() // Hide siblings
      .removeClass('active'); // Remove active class from siblings
  });
});
