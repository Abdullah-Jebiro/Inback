// Use jQuery to fetch and parse the JSON data
$(document).ready(function () {
  $.getJSON("contact_data.json", function (data) {
    // Populate services
    const servicesRow = $("#contact-services-row");
    $.each(data.contact_services, function (index, service) {
      servicesRow.append(`
                    <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                        <img src="${service.image}" />
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                `);
    });

    // Populate contact info
    $("#location-image").attr("src", data.contact_info.location.image);
    $("#location-text").text(data.contact_info.location.text);
    $("#email-image").attr("src", data.contact_info.email.image);
    $("#email-address").text(data.contact_info.email.address);

    const socialLinks = $("#social-links");
    $.each(data.contact_info.social, function (index, social) {
      socialLinks.append(`
                    <a href="${social.link}"><img src="${social.image}" /></a>
                `);
    });

    $("#map-image").attr("src", data.contact_info.map.image);
    $("#map-iframe").attr("src", data.contact_info.map.iframe_src);
  }).fail(function (error) {
    console.error("Error fetching JSON:", error);
  });
});
