$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav").toggleClass("showing");
    $(".nav ui").toggleClass("showing");
  });

  $(".slider-nav-thumbnails").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    appendArrows: $('.your-class-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 6000,
  });
});

// $(function () {
//   $(".slider-for").each(function (num, elem) {
//     elem = $(elem);
//     elem.slick({
//       infinite: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       draggable: false,
//       fade: true,
//       asNavFor: ".slider-nav",
//     });

//     elem.next(".slider-nav-thumbnails").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       asNavFor: ".slider-for",
//       dots: false,
//       arrows: true,
//       vertical: true,
//       draggable: false,
//       centerMode: false,
//       focusOnSelect: true,
//       responsive: [
//         {
//           breakpoint: 769,
//           settings: {
//             vertical: false,
//           },
//         },
//       ],
//     });
//   });
// });
