const tofahrenheit = document.getElementById('toFahrenheit');
const tocelslus = document.getElementById('toCelslus');
const button = document.getElementById('b');
const input = document.getElementById('text');
const resultElement = document.getElementById('result');

let result;

button.onclick = function() {
    let val = document.getElementById('text').value;

    if (isNaN(val) || val.trim() === '') {
        result = 'Please enter a valid number';
        resultElement.style.color = 'red';
    } else {
        val = Number(val);

        if (tocelslus.checked) {
            val = 5 / 9 * (val - 32);
            result = val.toFixed(2);
            resultElement.style.color = 'black';
        } 
        else if (tofahrenheit.checked) {
            val = (9 / 5 * val) + 32;
            result = val.toFixed(2);
            resultElement.style.color = 'black';
        } 
        else {
            result = 'Please select a unit!';
            resultElement.style.color = 'red';
        }
    }

    resultElement.textContent = result;
};

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
});
