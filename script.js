const white = "rgb(255, 255, 255)";

$(document).ready(function () {

    $("button").click(function () {

        let TicketText = $("#enter").val();
        function getRandomInt(min, max) {
            // использование Math.round() даст неравномерное распределение!
            return Math
            .floor(Math
                .random() * (max - min + 1)) + min;
        }
        let int = getRandomInt(1, 5);
        let chooseColor;
        switch (int) {
            case 1:
            chooseColor = "color1";
                break;
            case 2:
            chooseColor = "color2";
                break;
            case 3:
            chooseColor = "color3";
                break;
            case 4:
            chooseColor = "color4";
                break;
            case 5:
            chooseColor = "color5";
                break;
        }
        
        
        if ($("#one").css("border-color") === white) chooseColor  = "color1";
        if ($("#two").css("border-color") === white) chooseColor  = "color2";
        if ($("#three").css("border-color") === white) chooseColor  = "color3";
        if ($("#four").css("border-color") === white) chooseColor  = "color4";
        if ($("#five").css("border-color") === white) chooseColor  = "color5";
        $("#container")
        .prepend('<div class="' + chooseColor  + ' ticket"><table><tr><td><p>' + TicketText 
        + '</p></td></tr></table><input type="checkbox" class="point" /></div>');

        return false;
    });

});

$(document).ready(function () {
    $('body').on('click', '.point', function () {
        if ($(".point").is(':checked')) {
            $('#one,#two,#three,#four,#five').click(function () {

                if ($("#one").css("border-color") === white) {
                    let col = $("#one").css("background-color");
                    $('input:checkbox:checked')
                    .each(function () {
                        $(this)
                        .parent()
                        .css("background-color", col);
                    });
                    $('input:checkbox')
                    .prop('checked', false);
                };
                if ($("#two").css("border-color") === white) {
                    let col = $("#two")
                    .css("background-color");
                    $('input:checkbox:checked')
                    .each(function () {
                        $(this)
                        .parent()
                        .css("background-color", col);
                    });
                    $('input:checkbox').prop('checked', false);
                };
                if ($("#three").css("border-color") === white) {
                    let col = $("#three")
                    .css("background-color");
                    $('input:checkbox:checked')
                    .each(function () {
                        $(this)
                        .parent()
                        .css("background-color", col);
                    });
                    $('input:checkbox')
                    .prop('checked', false);
                };
                if ($("#four").css("border-color") === white) {
                    let col = $("#four")
                    .css("background-color");
                    $('input:checkbox:checked')
                    .each(function () {
                        $(this).parent()
                        .css("background-color", col);
                    });
                    $('input:checkbox')
                    .prop('checked', false);
                };
                if ($("#five").css("border-color") === white) {
                    let col = $("#five")
                    .css("background-color");
                    $('input:checkbox:checked')
                    .each(function () {
                        $(this).parent()
                        .css("background-color", col);
                    });
                    $('input:checkbox')
                    .prop('checked', false);
                };
            })

        }
    });
});



$(document).ready(function () {
    
    
    $("#one").click(function () {

        if ($(this).css("border-color") === white) {
            $(this)
            .removeClass('selected');
        }
        else {
            $(this).addClass('selected');
            if ($("#two").css("border-color") === white) {
                $("#two")
                .removeClass('selected');
            }
            if ($("#three").css("border-color") === white) {
                $("#three")
                .removeClass('selected');
            }
            if ($("#four").css("border-color") === white) {
                $("#four")
                .removeClass('selected');
            }
            if ($("#five").css("border-color") === white) {
                $("#five")
                .removeClass('selected');
            }
        }

    });
    $("#two").click(function () {
        if ($(this).css("border-color") === white) {
            $(this)
            .removeClass('selected');
        }
        else {
            $(this).addClass('selected');
            if ($("#one").css("border-color") === white) {
                $("#one")
                .removeClass('selected');
            }
            if ($("#three").css("border-color") === white) {
                $("#three")
                .removeClass('selected');
            }
            if ($("#four").css("border-color") === white) {
                $("#four")
                .removeClass('selected');
            }
            if ($("#five").css("border-color") === white) {
                $("#five")
                .removeClass('selected');
            }
        }

    });
    $("#three").click(function () {
        if ($(this).css("border-color") === white) {
            $(this)
            .removeClass('selected');
        }
        else {
            $(this)
            .addClass('selected');
            if ($("#two").css("border-color") === white) {
                $("#two")
                .removeClass('selected');
            }
            if ($("#one").css("border-color") === white) {
                $("#one")
                .removeClass('selected');
            }
            if ($("#four").css("border-color") === white) {
                $("#four")
                .removeClass('selected');
            }
            if ($("#five").css("border-color") === white) {
                $("#five")
                .removeClass('selected');
            }
        }

    });
    $("#four").click(function () {
        if ($(this).css("border-color") === white) {
            $(this)
            .removeClass('selected');
        }
        else {
            $(this).addClass('selected');
            if ($("#two").css("border-color") === white) {
                $("#two")
                .removeClass('selected');
            }
            if ($("#three").css("border-color") === white) {
                $("#three")
                .removeClass('selected');
            }
            if ($("#one").css("border-color") === white) {
                $("#one")
                .removeClass('selected');
            }
            if ($("#five").css("border-color") === white) {
                $("#five")
                .removeClass('selected');
            }
        }

    });
    $("#five").click(function () {
        if ($(this).css("border-color") === white) {
            $(this)
            .removeClass('selected');
        }
        else {
            $(this)
            .addClass('selected');
            if ($("#two").css("border-color") === white) {
                $("#two")
                .removeClass('selected');
            }
            if ($("#three").css("border-color") === white) {
                $("#three")
                .removeClass('selected');
            }
            if ($("#four").css("border-color") === white) {
                $("#four")
                .removeClass('selected');
            }
            if ($("#one").css("border-color") === white) {
                $("#one")
                .removeClass('selected');
            }
        }

    });
});

