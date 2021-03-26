var make_button_active = function () {
    var siblings = ($(this).siblings());
    siblings.each(function (index) {
        $(this).removeClass('active');
    }
    )
    $(this).addClass('active');
}

$(document).ready(
    function () {
        $(".navbar i").click(make_button_active);
    }
)

