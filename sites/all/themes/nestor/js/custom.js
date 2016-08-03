var j = jQuery.noConflict();
j(document).ready(function () {
    j('.show_toggle').click(function (event) {
        if (j("#pass-visi").prop('type') == 'text') {
            j("#pass-visi").prop('type', 'password');
            j(this).text('show');
        } else {
            j("#pass-visi").prop('type', 'text');
            j(this).text('hide');
        }
    });
});
j(function () {

    // Setup form validation on the #register-form element
    j("#user-register-form").validate({
        // Specify the validation rules
        rules: {
            name: "required",
            mail: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 5
            },
            agree: "required"
        },
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            pass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            mail: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});