// make navbar sticky on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $(".main-header").addClass("sticky");
    } else {
        $(".main-header").removeClass("sticky");
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.scroll-to-top').addClass('show');
    } else {
        $('.scroll-to-top').removeClass('show');
    }
});

$(document).ready(function () {
    // open-close hamburger menu
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("is-active");
    });

    // accordion icons
    $("#faqAccordion").on("hide.bs.collapse show.bs.collapse", e => {
        // console.log($(e.target).prev())
        $(e.target).parent().toggleClass("closed open");
    });

    // scroll to top
    $(".scroll-to-top").click(function () {
        $([document.documentElement, document.body]).animate({ scrollTop: $("html").offset().top }, 500);
    });
    
});