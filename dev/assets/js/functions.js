$(function() {

    // Fade in scroll.
    $(window).scroll( function() {
        $('.fade').each(function(e) {
            var currentObj = $(this);
            var bottomOfCurrentObject = currentObj.position().top + currentObj.outerHeight();
            var buttomOfWindow = $(window).scrollTop() + $(window).height();

            // If the object is completely visible in the window, fade it in.
            if(bottomOfCurrentObject > buttomOfWindow) {
                currentObj.animate({'opacity' : '1'}, 1000);
            }
        });
    });

    // Mobile nav
    $(".mobile-nav.menu-collapsed").on('click', function(e) {
        $(this).toggleClass("menu-expanded");
    });

    // $('.menu-collapsed .bar').mouseover(function() {
    //     $(this).toggleClass('bar-hover');
    //     console.log('hover bar');
    // });

    // Toggle RSVP Yes/No
    var isAttending;
    $('#rsvp-form .option').on('click', function(e) {
        toggleRsvp($(this), e);
    });
});

function fadeInSections() {

}

function toggleRsvp(obj, event) {
    if(obj.hasClass('yes')) {
        $("#attending-yes").prop("checked", true);
        obj.addClass('selected');
        $('.option.no').removeClass('selected');
        isAttending = true;
    } else if(obj.hasClass('no')) {
        $("#attending-no").prop("checked", true);
        obj.addClass('selected');
        $('.option.yes').removeClass('selected');
        isAttending = false;
    }

    if(isAttending) {
        toggleIsAttendingInputs();
    } else {
        toggleNotAttendingInputs();
    }
}

function toggleIsAttendingInputs() {
    $('.attending').show();
    $('.not-attending').hide();
}

function toggleNotAttendingInputs() {

}
