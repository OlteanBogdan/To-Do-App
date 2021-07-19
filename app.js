function handleHasDomain(email) {
    email.text('Email does not have domain');
    email.addClass('error');
    email.removeClass('succes');
}

$(document).ready(function () {

    $('.form').on('submit', function (e) {
        e.preventDefault()
    })

    var emailMessage = $('.email-message')

    $(".email").on('focusout', function () {
        var $emailVal = $(this).val()
        var isValid = false
        var hasDomain = false

        if ($emailVal.includes("@")) {
            isValid = true
        }

        if ($emailVal.includes(".")) {
            hasDomain = true
        }

        if (isValid == true && hasDomain == false) {
            handleHasDomain(emailMessage)
        } else if (isValid && hasDomain == true) {
            $('.email-message').text('Succes');
            $('.email-message').addClass('succes');
            $('.email-message').removeClass('error');
        }
        else {
            $('.email-message').text('Please enter a valid email');
            $('.email-message').addClass('error');
            $('.email-message').removeClass('succes');
        }
    })

    $(".password").on('focusout', function () {
        var $passwordVal = $(this).val()
        hasLenght = false


        if ($passwordVal.length > 6) {
            hasLenght = true
        }

        if (hasLenght == false) {
            $('.password-message').text('Password must have more than 6 character');
            $('.password-message').removeClass('succes');
            $('.password-message').addClass('error');
        } else {
            $('.password-message').text('Succes');
            $('.password-message').removeClass('error');
            $('.password-message').addClass('succes');
        }



    })

    $('.fa-eye').on('click', function () {
        $(this).toggleClass('fa-eye-slash')

        if ($('.password').attr('type') == ('password')) {
            $('.password').attr('type', 'text')
        }
        else {
            $('.password').attr('type', 'password')
        }
    })

    $('.match').on('focusout', function () {
        if ($(this).val() != $('.password').val() && $(this).val() != "") {
            $('.match-message').text('passwords does not match')
            $('.match-message').removeClass('succes')
            $('.match-message').addClass('error')
        } else {
            $('.match-message').text('Succes')
            $('.match-message').removeClass('error')
            $('.match-message').addClass('succes')

        }
    })
});
