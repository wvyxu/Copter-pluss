function validate() {
    let firstName = document.getElementById('first_name');
    console.log(firstName.value);
    let lastName = document.getElementById('last_name');
    let pat = document.getElementById('patronymic');
    let passport = document.getElementById('passport');
    let date = document.getElementById('dateOf-birth');
    let phone = document.getElementById('phone');
    let pass = document.getElementById('password');
    let conf = document.getElementById('confirmation');
  
    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let patronymicError = document.getElementById('patronymicError');
    let passportError = document.getElementById('passportError');
    let dateError = document.getElementById('dateOfBirthError');
    let phoneError = document.getElementById('phoneError');
    let passwordError = document.getElementById('passwordError');
    let confError = document.getElementById('confirmationError');
  

    if (!/^[А-Яа-яЁё\s]+$/.test(firstName.value)) {
      firstName.style.borderColor = "red";
      firstNameError.textContent = "Поле должно содержать только кириллицу";
    } else {
      firstName.style.borderColor = "";
      firstNameError.textContent = "";
    }
  

    if (!/^[А-Яа-яЁё\s]+$/.test(lastName.value)) {
      lastName.style.borderColor = "red";
      lastNameError.textContent = "Поле должно содержать только кириллицу";
     
    } else {
      lastName.style.borderColor = "";
      lastNameError.textContent = "";
    }
  

    if (!/^[А-Яа-яЁё\s]+$/.test(pat.value) && pat.value != "") {
      pat.style.borderColor = "red";
      patronymicError.textContent = "Поле должно содержать только кириллицу";
      
    } else {
      pat.style.borderColor = "";
      patronymicError.textContent = "";
    }


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

  
    if (pass2.value != pass.value) {
      pass2.style.borderColor = "red";
      againPasswordError.textContent = "Пароли не совпадают";
      
    } else {
      pass2.style.borderColor = "";
      againPasswordError.textContent = "";
    }
}