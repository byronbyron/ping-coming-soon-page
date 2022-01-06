const form = document.querySelector('.js-form');
const msg = document.querySelector('.js-form-msg');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(e.target.email.value)) {
        event.target.email.setAttribute("aria-invalid", "true");
        msg.style.display = 'block';
    } else {
        event.target.email.setAttribute("aria-invalid", "false");
        msg.style.display = 'none';
    }
}

function validateEmail(value) {
    var input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function'
        ? input.checkValidity()
        : /\S+@\S+\.\S+/.test(value);
}
