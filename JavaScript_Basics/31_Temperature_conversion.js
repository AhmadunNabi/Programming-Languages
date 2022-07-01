document.getElementById('submitButton').addEventListener('click', function () {
    let temp;

    if (document.getElementById('cButton').checked) {
        temp = parseFloat(document.getElementById('textBox').value);

        document.getElementById("tempLabel").innerText = toCelsius(temp) + " °C";
    }
    else if (document.getElementById('fButton').checked) {
        temp = parseFloat(document.getElementById('textBox').value);

        document.getElementById("tempLabel").innerText = toFahrenheit(temp) + " °F";
    }
    else {
        document.getElementById("tempLabel").innerText = 'Select a unit';

    }
})


function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

