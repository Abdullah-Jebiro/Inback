$(document).ready(function () {
  $(".lazy").Lazy();

  // navbar
  window.addEventListener("scroll", function () {
    if (window.pageYOffset != 0)
      $(".navbar").css("background-color", "#ffffffe6");
    else $(".navbar").css("background-color", "transparent");
  });

  // Fetch data from JSON file and populate filters and gallery
  $.getJSON("./json/works.json", function (data) {
    // Generate filter buttons
    let filterButtons = "";
    data.filters.forEach(function (filter) {
      filterButtons += `
          <input type="radio" class="btn-check" name="btnradio" id="${filter.id}" autocomplete="off">
          <label class="btn" for="${filter.id}">${filter.label}</label>
        `;
    });
    $("#filter-buttons").html(filterButtons);
    // Set 'All' as the default selected filter
    $("#all").prop("checked", true);

    // Generate gallery content
    let galleryContent = "";
    data.items.forEach(function (item) {
      galleryContent += `
          <div class="col-6 col-lg-2 gallery-item active" data-related="${item.id}" style="padding:10px;">
            <div class="videos__video" data-src="${item.src}" style="padding: 10px;background: white;border: 1px solid #2a0a6230;border-radius: 10px;">
              <img src="${item.src}" alt="${item.alt}" class="img-fluid lazy" height="100%" width="100%" style="border-radius:10px;height: 150px;">
            </div>
            <h6 class="main-title__text text-center mt-3">${item.title}</h6>
          </div>
        `;
    });
    $("#gallery-content").html(galleryContent);

    // Filter functionality
    $('input[name="btnradio"]').on("change", function () {
      let selectedFilter = $(this).attr("id");
      if (selectedFilter === "all") {
        $(".gallery-item").removeClass("inactive").addClass("active");
      } else {
        $(".gallery-item").each(function () {
          console.log($(this).data("related"), selectedFilter, $(this).data("related") == selectedFilter);

          if ($(this).data("related") == selectedFilter) {
            $(this).removeClass("inactive").addClass("active");
          } else {
            $(this).removeClass("active").addClass("inactive");
          }
        });
      }
    });
  });

  // Fetch JSON data using jQuery
  $.getJSON("./json/services.json", function (data) {
    const servicesContainer = $("#servicesContainer");
    const services = data.services;

    // Generate service cards
    $.each(services, function (index, service) {
      const serviceCard = `
        <div class="col-lg-4 col-md-6">
          <div class="service__card" onclick="window.location.href='${service.url}';">
            <div class="service__card__img">
              <img src="${service.image}" alt="${service.title}" class="img-fluid lazy" height="100%" width="100%">
            </div>
            <div class="service__card__content">
              <h3 class="service__card__content__title">${service.title}</h3>
              <p class="service__card__content__desc">${service.description}</p>
            </div>
          </div>
        </div>
      `;
      servicesContainer.append(serviceCard);
    });
  }).fail(function (jqxhr, textStatus, error) {
    const err = textStatus + ", " + error;
    console.error("Error fetching services: " + err);
  });

  $(".clients-slider__content").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    rtl: true,
    dots: false,
    autoHeight: true,
    lazyLoad: true,
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
    $("div[data-related].active")
      .removeClass("active")
      .fadeOut(500, () => {
        if (this.id === "all")
          $("div[data-related]").fadeIn(500).addClass("active");
        else
          $(`div[data-related = "${this.id}"]`).fadeIn(500).addClass("active");
      });
  });

  // for video popup
  let video_modal = $(".popup-window");
  let video_iframe = $(".popup-window iframe");
  let close_iframe = $(".popup-window i");
  let gallery_videos = $(".videos__video"); // for video gallery
  let watchVideo_btn = $(".watchVideo_btn"); // for video popup

  gallery_videos.click(show_form);
  watchVideo_btn.click(show_form);
  close_iframe.click(hide_modal);
  video_modal.click(hide_modal);

  function show_form(e) {
    e.preventDefault();
    let video_src = $(this).attr("data-src");
    $(video_iframe).attr("src", video_src);
    $(video_modal).css("display", "flex");
    $("body").css("overflowY", "hidden");
    $(video_modal).fadeIn(500);
  }

  function hide_modal(e) {
    e.preventDefault();
    $(video_modal).fadeOut(500, function () {
      $("body").css("overflowY", "auto");
    });
    $(video_iframe).attr("src", "");
  }
});


  // Team Carousel - Start
  // --------------------------------------------------
    $(".team_carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 800,
      margin: 30,
      center: true,
      responsive: {
        300: {
           items: 1
        },
        900: {
           items: 2
        },
        1200: {
           items: 3
        },
     },
      dots: true,
      dotsContainer: '.team-swiper-pagination'
    });
  // Team Carousel - End



