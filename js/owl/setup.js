$(".jogos > .owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  lazyLoad: false,
  center: true,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".filmes > .owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  lazyLoad: false,
  center: true,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 10,
    },
  },
});
