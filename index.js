window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
//for arrow click part (PART2)
$(document).ready(function () {
    $('#down').on('click', function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $('#beige').offset().top
        }, 1000);
    });
});

