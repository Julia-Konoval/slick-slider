$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav").toggleClass("showing");
    $(".nav ui").toggleClass("showing");
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
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
