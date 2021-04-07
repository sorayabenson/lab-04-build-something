const textSentWrapper = document.getElementById('textSent');

function textSent(number) {
    const p = document.createElement('p')
    p.textContent = `Yay, your gif to ${number} has been sent!`;

    textSentWrapper.append(p);
}

function textError() {
    const p = document.createElement('p')
    p.textContent = `sorry babe, that's an invalid phone number`;

    textSentWrapper.append(p);
}

function clearTextWrapper() {
    textSentWrapper.innerHTML='';
}

const phoneInputField = document.querySelector("#textInput");
const phoneInput = window.intlTelInput(phoneInputField, {
preferredCountries: ["us", "cr", "ir"],
utilsScript:
"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

export function phoneNumberProcess() {
    const phoneNumber = phoneInput.getNumber();

    if(phoneInput.isValidNumber()) {
        clearTextWrapper();
        textSent(phoneNumber);
    } else {
        clearTextWrapper();
        textError();
    }      
}