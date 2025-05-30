let displayValue = '';
let firstNumber = '';
let secondNumber = '';
let operation = '';


function appendNumber(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}


function performOperation(op) {
    if (!firstNumber) {
        firstNumber = displayValue;
        operation = op;
        displayValue += op;
        document.getElementById('display').value = displayValue;
    }
}


function calculate() {
    if (firstNumber && operation) {
        secondNumber = displayValue.split(operation)[1];
        let result = 0;

        if (operation === '*') {
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
        } else if (operation === '/') {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
        } else if (operation === '+') {
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
        } else if (operation === '-') {
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
        }

        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        firstNumber = '';
        secondNumber = '';
        operation = '';
    }
}


function clearDisplay() {
    displayValue = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    document.getElementById('display').value = '';
}


function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        appendNumber(key); 
    } else if (['+', '-', '*', '/'].includes(key)) {
        performOperation(key); 
    } else if (key === 'Enter' || key === '=') {
        calculate(); 
    } else if (key === 'Escape') {
        clearDisplay(); 
    } else if (key === 'Backspace') {
        deleteLast(); 
    } else if (key === '.') {
        appendNumber('.'); 
    }
});