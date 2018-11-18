// when scroll is less that 200px footer will appear
$(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
        $("footer").slideUp();
    }
    else {
        $("footer").slideDown();
    }
});

