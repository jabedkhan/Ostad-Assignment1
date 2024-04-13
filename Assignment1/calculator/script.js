function calculate() {
    const num1 = parseFloat(document.getElementById('firstdigit').value);
    const num2 = parseFloat(document.getElementById('secoundigit').value);
    const operation = document.getElementById('inputGroupCal').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operation) {
        case 'addi':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multipli':
            result = num1 * num2;
            break;
        case 'divi':
            if (num2 === 0) {
                resultElement.textContent = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Invalid operation';
            return;
    }

    resultElement.textContent = result;
}