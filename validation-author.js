function validate() {
    let phone = document.getElementById('phone');
    let pass = document.getElementById('password');
    let remember = document.getElementById('remember');
  
    let phoneError = document.getElementById('phoneError');
    let passwordError = document.getElementById('passwordError');
    let rememberError = document.getElementById('remember');


    if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)) {
        phone.style.borderColor = "red";
        phoneError.textContent = "Введите корректный номер телефона";
    } else {
        phone.style.borderColor = "";
        phoneError.textContent = "";
    }

    if (password.value.length < 8) {
        pass.style.borderColor = "red";
        passwordError.textContent = "Пароль должен содержать не менее 8 символов";
    } else {
        pass.style.borderColor = "";
        passwordError.textContent = "";
    }
  
    if (remember.value != 'true') {
        pass2.style.borderColor = "red";
        againPasswordError.textContent = "";
    } else {
        pass2.style.borderColor = "";
        againPasswordError.textContent = "";
    }
}