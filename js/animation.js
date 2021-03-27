//  animation navbar
var make_button_active = function () {
    var siblings = ($(this).siblings());
    siblings.each(function (index) {
        $(this).removeClass('active');
    }
    )
    $(this).addClass('active');
}

// animal card animation
var animal_selectded = function () {
    var siblings = ($(this).siblings());
    siblings.each(function (index) {
        $(this).addClass('animal-card-inactive');
    }
    )
    $(this).removeClass('animal-card-inactive');
}


$(document).ready(
    function () {
        $(".navbar i").click(make_button_active);
        $(".animals_box div").click(animal_selectded);
    }
)

