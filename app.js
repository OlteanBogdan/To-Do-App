$(document).ready(function () {

    var $input = $('.main-input');


    $input.on('keydown', function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var $inputText = $input.val();

        if (keycode === 13 && $inputText != "") {
            $('.app-list-wrapper').prepend(`<div class="app-list"><span>${$inputText}</span></div>`);

            $('.app-list').prepend(`<button class="close-tab">X</button>`);
            $input.val("");
        }
    })
    var $closeBtn = $('.close-tab');
    console.log($closeBtn)

    $('.app-list-wrapper').on('click', '.close-tab', function () {
        console.log('mor')
        $(this).parent().remove();
    })
});