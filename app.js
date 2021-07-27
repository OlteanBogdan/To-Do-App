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
            $('.app-list').prepend('<div class="circle-selector"></div>');

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

    $('.app-list-wrapper').on('click', '.circle-selector', function () {
        $(this).toggleClass('active-checked')
        $(this).parent().toggleClass('checked')
    })

    $('.clear-toggle').on('click', function () {
        var checkedTabs = $('.app-list.checked').length;
        parseNumber -= checkedTabs
        $tabNumber.text(parseNumber)

        $('.app-list.checked').remove()

        if ($('.app-list').length < 1) {
            $action.removeClass('display')
        }
    })

    $('.completed-toggle').on('click', function () {
        var checkedTabs = $('.app-list.checked').length;

        if (checkedTabs > 0) {
            parseNumber = checkedTabs
            $tabNumber.text(parseNumber)

            $('.app-list:not(.checked)').hide()
            $('.app-list.checked').show()
        }
    })

    $('.active-toggle').on('click', function () {
        $('.app-list:not(.checked)').show()
        $('.app-list.checked').hide()

        var notCheckedTabs = $('.app-list:not(.checked)').length;

        parseNumber = notCheckedTabs
        $tabNumber.text(parseNumber)
    })

    $('.all-toggle').on('click', function () {
        parseNumber = $('.app-list').length
        $tabNumber.text(parseNumber)

        $('.app-list:not(.checked)').show()
        $('.app-list.checked').show()
    })
});