function Validator(options) {
    const formElement = $(options.form);

    const selectorRules = {};

    options.rule.forEach((rule) => {
        if (!Array.isArray(selectorRules[rule.selector])) {
            // Kiếm tra nếu không thì array thì gán bằng array
            selectorRules[rule.selector] = [rule.Validate];
        } else {
            selectorRules[rule.selector].push(rule.Validate);
        }
    })

    // =>selectorRules: #register__email: [ƒ]
    //                  #register__password: (2) [ƒ, ƒ]
    //                  #register__password__confirmation: (2) [ƒ, ƒ]
    //                  #register__user-name: (3) [ƒ, ƒ, ƒ]

    const rules = formElement.querySelectorAll(`${options.formSelector} input`);

    // => rules:   0: input#register__user-name.form__control
    //             1: input#register__password.form__control
    //             2: input#register__password__confirmation.form__control
    //             3: input#register__email.form__control

    [...rules].forEach((rule) => {
        let parentElement = getParent(rule, options.formSelector);
        let errorElement = parentElement.querySelector(options.errorSelector);
        let errorMessage = '';
        
        // Xử lý khi blur khỏi rule
        rule.onblur = () => {
            let Validates = selectorRules[`#${rule.id}`];

            for(let i = 0; i < Validates.length; i++) {
                errorMessage = Validates[i](rule.value);

                if(errorMessage) break;
            }

            if (errorMessage) {
                errorElement.textContent = errorMessage;
                parentElement.classList.add('invalid');
                parentElement.classList.remove('success');
            } else {
                errorElement.textContent = '';
                parentElement.classList.remove('invalid');
                parentElement.classList.add('success');
            }
        }

        rule.oninput = () => {
            if(rule.value.trim()) {
                if (parentElement.matches('.invalid')) {
                    errorElement.textContent = '';
                    parentElement.classList.remove('invalid');
                }
            }
        }
    })

    function getParent(element, selector) {
        while(!element.parentElement.matches(selector)) {
            element = element.parentElement;
        }

        return element.parentElement;
    }
    

    formElement.onsubmit = (e) => {
        e.preventDefault();

        let isValidForm = true;

        [...rules].forEach((rule) => {
            let parentElement = getParent(rule, options.formSelector);
            if (parentElement.matches('.invalid')) {
                isValidForm = false;
            }
        })
        
        if (isValidForm) {
            let formValues = [...rules].reduce((formValues, currValue) => {
                if(currValue.name == 'confir__password') return formValues;
                formValues[currValue.name] = currValue.value;

                return formValues;
            }, {});

            options.onSubmit(formValues);

            renderLogin(options.form, formValues.userName);
        }
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        Validate: function(value) {
            return value ? undefined : message;
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        Validate: function(value) {
            return value.length >= min ? undefined : message;
        }
    }
}

Validator.maxLength = function(selector, max, message) {
    return {
        selector: selector,
        Validate: function(value) {
            return undefined;
        }
    }
}

Validator.isUsed = function(selector, message) {
    return {
        selector: selector,
        Validate: function(value) {
            return undefined;
        }
    }
}

Validator.isConfirmed = function(selector, confirmed, message) {
    return {
        selector: selector,
        Validate: function(value) {
            return value === document.querySelector(confirmed).value ? undefined : message;
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        Validate: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message;
        }
    }
}