const dobInput = document.getElementById("dob");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener('click', function () {
    const dob = new Date(dobInput.value);
    const ageInMins = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMins);
    const age = Math.abs(ageDate.getUTCFullYear()- 1970);

    result.innerHTML = `your age is: ${age} years.`;
})