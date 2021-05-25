$(document).ready(() => {
    $('img').click(function() {
        $(this).fadeOut();
    })

    $('button').click(function() {
        $('img').fadeIn();
    })
})