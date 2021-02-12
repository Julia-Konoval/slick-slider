$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav").toggleClass("showing");
    $(".nav ui").toggleClass("showing");
  });
  let $status = $(".pagingInfo");
  let $slickElement = $(".video-slider");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      let i = (currentSlide ? currentSlide : 0) + 1;

      $status.text(i + " - " + slick.slideCount);
    }
  );

  $(".slider-nav-thumbnails").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    variableWidth: true,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    customPaging: function (slider, i) {
      //FYI just have a look at the object to find available information
      //press f12 to access the console in most browsers
      //you could also debug or look in the source
      console.log(slider);
      return i + 1 + "/" + slider.slideCount;
    },
  });
});
