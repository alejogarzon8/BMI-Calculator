document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmiValue = calculateBMI(height, weight);

    document.getElementById('bmi-value').textContent = bmiValue.toFixed(2);

    const category = getBMICategory(bmiValue);
    document.getElementById('bmi-category').textContent = `Category: ${category}`;

    document.getElementById('result').style.display = 'block';
});

function calculateBMI(height, weight) {
    return weight / ((height / 100) ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}