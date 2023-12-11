const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]|\\:;'\",./<>?";

const input = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lowercase');
const upperEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', function() {
    const length = lengthEl.value;
    let characters = "";
    let password = "";

    if (lowerEl.checked) {
        characters += lowercase;
    }
    if (upperEl.checked) {
        characters += uppercase;
    }

    if (numberEl.checked) {
        characters += numbers;
    }

    if (symbolEl.checked) {
        characters += symbols;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        
    }

    input.value = password;

})

