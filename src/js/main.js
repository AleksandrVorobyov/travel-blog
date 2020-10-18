$(document).ready(function(){
    $(".carousel__head").owlCarousel({
      items: 1,
      nav:false,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed:1500,
      loop: true,
      margin: 10,
      dots: true
    });
  });