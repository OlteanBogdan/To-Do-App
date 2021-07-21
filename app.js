$(document).ready(function () {
    var $input = $('.main-input');
    var $action = $('.action-buttons');
    var $tabNumber = $('.number');
    var parseNumber = parseInt($tabNumber.text())

    $input.on('keydown', function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var $inputText = $input.val();

        if (keycode === 13 && $inputText != "") {
            $('.app-list-wrapper').prepend(`<div class="app-list"><span>${$inputText}</span></div>`);

            $('.app-list').prepend(`<button class="close-tab">X</button>`);
            $action.addClass('display')
            $input.val("");

            parseNumber++
            $tabNumber.text(parseNumber)

        }
    })

    $input.on('focus', function () {
        $(this).attr('placeholder', 'Curently typing.')
    })

    $input.on('focusout', function () {
        $(this).attr('placeholder', 'Create a new todo...')
    })

    $('.app-list-wrapper').on('click', '.close-tab', function () {
        $(this).parent().remove();
        parseNumber--
        $tabNumber.text(parseNumber)

        if ($('.app-list').length < 1) {
            $action.removeClass('display')
        }


    })
});