function calculateMaturityAmount() {
    //Get The imput values from the form elements
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform the calculation
    const maturity = principle + (principle * interestRate *tenure)/100;

    //display the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturity.toFixed(2)}`;
}

//attach an eventlistener to button

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);