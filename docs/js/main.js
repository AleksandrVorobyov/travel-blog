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

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1500
        );
        return false;
      }
    }
  });
});
  
$(document).ready(function() {
  $('.nav__menu').click(function() {
    $('.burger-menu').toggleClass("burger-menu--active");
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.link-burger').click(function() {
    $('.burger-menu').removeClass("burger-menu--active");
    $('body').removeClass('lock');
  });
});

const selectDropdown = document.querySelector("[data-select]");

selectDropdown.addEventListener('click', function() {
    let realSelect = this.nextElement;
    if (event.target.hasAttribute('data-select-item')) {
      let itemTitle = event.target.getAttribute('data-select-item');
      this.querySelector('[data-select-title]').textContent = itemTitle;

      this.querySelector('.list-dropdown').classList.toggle('scale0');

      if (realSelect) {
        realSelect.value = itemTitle;
      }
    } else {
      this.querySelector('.list-dropdown').classList.toggle('scale0');
    }
  })