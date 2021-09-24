jQuery(document).ready(function () {
  initTab();

  $('.work-slider').slick({
    centerMode: false,  
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.news-slider').slick({
    centerMode: false,  
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  });

  $('.testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.testimonials-nav'
  });

  $('.testimonials-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials-slider',
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
});

function initTab() {
  $('.tabs-content__item').hide();
  $('.tabs-content__item.active').show();

  $('body').on('click', '.tabs-nav__btn', function (e) {
    $(".work-slider").slick('refresh');
    e.preventDefault();
    var id = $(this).attr('data-tab')
    $(this).closest('.tabs-nav').find('.tabs-nav__btn.active').removeClass('active');
    $(this).addClass('active');
    $($('.tabs-content__item[data-tab="' + id + '"]')[0]).fadeIn(400).addClass('active').siblings('.active').hide().removeClass('active');
  });
}

