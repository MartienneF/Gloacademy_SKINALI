$(window).load(function () {

/* --------------------------- twentytwenty plugin -------------------------- */

  $(".before-after").twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали'
  });

/* ----------------------- before after slick settings ---------------------- */

  $(".before-slider").slick({
    draggable: false,
    touchMove: false,
    swipe: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  
/* ---------------------- reviews slick slider settings --------------------- */
  
  $(".reviews-slider").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

/* ---------------------------- humburger button ---------------------------- */

  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
    $('.menu-button').toggleClass('menu-button_change');
  });

/* --------------------------------- custom select --------------------------------- */

  $('.select_checked').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function() {
    var value =  $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });


/* -------------------------- anchor links settings ------------------------- */

  $('a[href^="#"]').click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 130 + 'px' });
    return false;
  });

/* -------------------------- masked input settings ------------------------- */
  $('input[type="tel"]').mask("+9 (999) 999-99-99?9");

/* -------- map display settings (only when the user scrolled to it to speed up the page) -------- */

  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $(window).unbind('scroll');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4aa32e13aac285432c22ac1aead6557eaf34faff7815655f3256ed1dddedc25b&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false" ></script >');
    }
  });

});