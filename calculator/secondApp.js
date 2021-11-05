// console.log("Hello ji");

const displayOutput = document.querySelector('.display-output');
const operations = document.querySelector('.operations');
const displayInput = document.querySelector('.display-input');

const operators = document.querySelectorAll('.operator');
const deleteButton = document.querySelector('#delete-button');
const numericButton = document.querySelectorAll('.numeric');
const isEqual = document.querySelector('#is_equal');
const decimalPoint = document.querySelector('.decimal_point');


// Function for arithmatic operations
const arithmaticOperation = (current, previous, operator) => {
    if (operator === '+') {
        sum = current + previous;
        return sum
    }
    else if (operator === '-') {
        remaining = previous - current;
        return remaining
    }
    else if (operator === '*') {
        product = current * previous;
        return product
    }
    else if (operator === '/') {
        quotation = previous / current;
        return quotation
    }
}

// console.log(arithmaticOperation(30, 60, '*'));

// Delete button
deleteButton.addEventListener('click', () => {
    displayInput.textContent = 0;
    displayOutput.textContent = '';
    operations.textContent = undefined;
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (parseFloat(displayInput.textContent) >= 0 && parseFloat(displayOutput.textContent) >= 0 ) {
            displayOutput.textContent = arithmaticOperation(parseFloat(displayInput.textContent), parseFloat(displayOutput.textContent), operator.textContent);
            console.log('Dono filled hai')
            displayInput.textContent = '0';
            operations.textContent = operator.textContent;
        }
        else {
             // console.log(operator.textContent);
            operations.textContent = operator.textContent;
            displayOutput.textContent = displayInput.textContent;
            displayInput.textContent = 0;
        }
    })
})


// Decimal Point button functions
decimalPoint.addEventListener('click', () => {
    if (displayInput.textContent.includes(decimalPoint.textContent)) {
        alert("Already has a decimal point!");
    }
    else {
     displayInput.textContent += decimalPoint.textContent;   
    }
})

// Number buttons
numericButton.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (displayInput.textContent == 0 && numberButton.textContent == 0) {
            displayInput.textContent = numberButton.textContent;
        }
        else if (displayInput.textContent == '0' && numberButton.textContent in [1, 2, 3, 4, 5, 6, 7, 8, 9,10]) {
            displayInput.textContent = numberButton.textContent;
        }
        else if (displayInput.textContent === '.0') {
            displayInput.textContent += numberButton.textContent;
            }
        else {
            displayInput.textContent += numberButton.textContent;    
        }
    })
})


// Is Equal button
isEqual.addEventListener('click', () => {
    // console.log(arithmaticOperation(parseInt(displayInput.textContent), parseInt(displayOutput.textContent), operations.textContent));
    displayOutput.textContent = arithmaticOperation(parseFloat(displayInput.textContent), parseFloat(displayOutput.textContent), operations.textContent);
    displayInput.textContent = 0;
})