const emailInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");
const PasswordInputRepeat = document.getElementById("password_repeat");
const checkPasswordButtons = document.querySelectorAll("#password_check");


function validateEmail() {
    return /^[a-z1-9]+@[a-z]+\.[a-z]+$/.test(emailInput.value);
}
  
function validatePassword() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={[}\]|\\:;"'<,>.?/`~-]{8,}$/.test(passwordInput.value);
}
  
function validateRepeatPassword() {
    return PasswordInputRepeat.value === passwordInput.value;
}
  
emailInput.addEventListener("input", function () {
    emailInput.setCustomValidity(validateEmail() ? "" : "Пожалуйста, введите правильную почту");
});
  
passwordInput.addEventListener("input", function () {
    passwordInput.setCustomValidity(validatePassword() ? "" : "Пароль должен содержать в себе от 8 символов, одну заглавную букву и цифры");
});
  
PasswordInputRepeat.addEventListener("input", function () {
    PasswordInputRepeat.setCustomValidity(validateRepeatPassword() ? "" : "Пароли не совпадают");
});  

checkPasswordButtons.forEach((button) => {
    const passwordInput = button.previousElementSibling;
    button.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});


