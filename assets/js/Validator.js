function Validator(options) {
    const formElement = $(options.form);

    const userName = $('#user-name');
    const password = $('#password');
    const formError = $('.form__error');

    formElement.onsubmit = (e) => {
        e.preventDefault();

        formError.style.display = 'block';
    }
}

Validator.isSubmit = function(selector) {

}