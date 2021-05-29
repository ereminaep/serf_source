(function() {
    const form = document.querySelector('.order__form');
    const submit = document.querySelector('.order__button');
    const popup = document.querySelector('.popup');
    const EMAIL = "test@123.ru";
    const SERVER = "https://webdev-api.loftschool.com/sendmail";

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm(form)) {

            let data = {
                name: form.elements.name.value,
                phone: form.elements.phone.value,
                comment: form.elements.message.value,
                to: EMAIL
            }
            console.log(data);
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', SERVER);
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', function(e) {
                console.log(xhr.response.message);
                document.querySelector('.popup__text').textContent = xhr.response.message;
                document.querySelector('body').classList.add('noscroll');
                document.querySelector('.wrapper').classList.add('noscroll');
                document.querySelector('.rectangle').classList.add('rectangle--open');
                popup.classList.add('popup--open');
            })


        }
    });

    document.querySelector('.popup__close').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.popup').classList.remove('popup--open');
        document.querySelector('body').classList.remove('noscroll');
        document.querySelector('.rectangle').classList.remove('rectangle--open');
        form.reset();
    });

    document.querySelector('.clear-button').addEventListener('click', function(e) {
        e.preventDefault();
        form.reset();
    });

    function validateForm(form) {
        let valid = true;
        for (let i = 0; i < form.elements.length; i++) {
            if (!validateField(form.elements[i])) {
                valid = false;
            }
        }
        return valid;

    }

    function validateField(field) {
        if ((field.type == 'text') || (field.classList.contains('textarea'))) {
            field.nextElementSibling.textContent = field.validationMessage;
        }

        return field.checkValidity();
    }
})()