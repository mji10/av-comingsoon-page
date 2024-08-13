(function ($) {
  "use strict";

  const cfg = {
    scrollDuration: 800,
    mailChimpURL:
      "https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc",
  };
  const $WIN = $(window);

  const doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  const ssPreloader = function () {
    $("html").addClass("ss-preload");

    $WIN.on("load", function () {
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });

      $("html").removeClass("ss-preload");
      $("html").addClass("ss-loaded");
    });
  };


  const ssPrettyPrint = function () {
    $("pre").addClass("prettyprint");
    $(document).ready(function () {
      prettyPrint();
    });
  };

  /* slick slider
   * ------------------------------------------------------ */
  const ssSlickSlider = function () {
    $(".intro-slider").slick({
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      speed: 3000,
    });
  };

  /* modal
   * ---------------------------------------------------- */
  const ssModal = function () {
    // const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".modal-trigger");
    // const closeButton = document.querySelector(".modal__close");

    function toggleModal() {
      window.open("https://www.instagram.com/avarchitects/");
    }

    trigger.addEventListener("click", toggleModal);
  };

  /* final countdown
   * ------------------------------------------------------ */
  const ssFinalCountdown = function () {
    const finalDate = "2024/09/07";

    $(".counter")
      .countdown(finalDate)
      .on("update.countdown finish.countdown", function (event) {
        const str =
          '<div class="counter__time days">%D&nbsp;<span>D</span></div>' +
          '<div class="counter__time hours">%H&nbsp;<span>H</span></div>' +
          '<div class="counter__time minutes">%M&nbsp;<span>M</span></div>' +
          '<div class="counter__time seconds">%S&nbsp;<span>S</span></div>';

        $(this).html(event.strftime(str));
      });
  };

  /* smooth scrolling
   * ------------------------------------------------------ */
  const ssSmoothScroll = function () {
    $(".smoothscroll").on("click", function (e) {
      const target = this.hash;
      const $target = $(target);

      e.preventDefault();
      e.stopPropagation();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          cfg.scrollDuration,
          "swing"
        )
        .promise()
        .done(function () {
          window.location.hash = target;
        });
    });
  };

  /* back to top
   * ------------------------------------------------------ */
  const ssBackToTop = function () {
    const pxShow = 500;
    const $goTopButton = $(".ss-go-top");

    // Show or hide the button
    if ($(window).scrollTop() >= pxShow)
      $goTopButton.addClass("link-is-visible");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= pxShow) {
        if (!$goTopButton.hasClass("link-is-visible"))
          $goTopButton.addClass("link-is-visible");
      } else {
        $goTopButton.removeClass("link-is-visible");
      }
    });
  };

  /* initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    ssPreloader();
    ssPrettyPrint();
    ssSlickSlider();
    ssModal();
    ssFinalCountdown();
    ssTabs();
    ssAlertBoxes();
    ssSmoothScroll();
    ssBackToTop();
    ssAjaxChimp();
  })();
})(jQuery);
