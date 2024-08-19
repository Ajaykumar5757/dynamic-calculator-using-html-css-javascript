let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || '0');
}

function appendNumber(number) {
    displayValue += number.toString();
    updateDisplay(displayValue);
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay(displayValue);
}

function calculate() {
    try {
        const result = eval(displayValue);
        updateDisplay(result);
        displayValue = result.toString();
    } catch (error) {
        updateDisplay('Error');
        displayValue = '';
    }
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}
