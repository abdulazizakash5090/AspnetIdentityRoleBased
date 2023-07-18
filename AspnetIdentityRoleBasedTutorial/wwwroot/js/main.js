
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

   /* function validate(input) {
        if ($(input).attr('type') == 'text' || $(input).attr('name') == 'user') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }*/

    function validate(input) {
        var value = $(input).val().trim();

        if ($(input).attr('type') === 'text' || $(input).attr('name') === 'user') {
            // Check if the username is valid
            if (value.length < 3 || value.length > 20) {
                return false; // Username must be between 3 and 20 characters
            }
            if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                return false; // Username can only contain letters, numbers, and underscores
            }
        } else {
            if (value === '') {
                return false;
            }
        }

        // Input is valid
        return true;
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);