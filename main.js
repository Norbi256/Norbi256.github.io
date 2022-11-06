const numbers = document.querySelectorAll('.numbers')
const tools = document.querySelectorAll('.tools')
const previousNumber = document.querySelector('.previous-number')
const currentNumber = document.querySelector('.current-number')
const mathSign = document.querySelector('.math-sign')

const plusSign = document.querySelector('.plus-sign')
const minusSign = document.querySelector('.minus-sign')
const multiplySign = document.querySelector('.multiply-sign')
const divisionSign = document.querySelector('.division-sign')
const dotSign = document.querySelector('.dot')
const equalSign = document.querySelector('.equal-sign')
const backTool = document.querySelector('.back-tool')
const resetTool = document.querySelector('.reset-tool')

let currentResult
let previousResult
let id = 0

const addNumbers = e => {
	if (currentNumber.textContent.length <= 15 && id == 0) {
		currentNumber.textContent += e.target.innerText
		currentResult = currentNumber.textContent

		if (currentNumber.textContent.length >= 15) {
			currentNumber.style.fontSize = '3.6vw'
		} else if (currentNumber.textContent.length >= 12) {
			currentNumber.style.fontSize = '4.2vw'
		}
	} else if (id == 1) {
		currentNumber.textContent = e.target.innerText
		id = 0
	} else if (id == 2) {
		currentNumber.textContent = e.target.innerText
        currentResult = currentNumber.textContent
		previousNumber.textContent = ''
		id = 0
	}
}

const addOperation = () => {
	if (previousNumber.textContent == '' && currentNumber.textContent !== '' && id == 0) {
		previousResult = currentResult
		previousNumber.textContent = previousResult
		previousNumber.textContent += '+'
		currentNumber.textContent = ''
	} else if (previousNumber.textContent !== '' && id == 0) {
		currentResult = currentNumber.textContent
		currentNumber.textContent = parseFloat(currentResult) + parseFloat(previousResult)
		previousNumber.textContent = currentNumber.textContent
		previousResult = previousNumber.textContent
		previousNumber.textContent += '+'
		id = 1
	}
}

const substractOperation = () => {
	if (previousNumber.textContent == '' && currentNumber.textContent !== '' && id == 0) {
		previousResult = currentResult
		previousNumber.textContent = previousResult
		previousNumber.textContent += '-'
		currentNumber.textContent = ''
	} else if (previousNumber.textContent !== '' && currentNumber.textContent !== '' && id == 0) {
		currentResult = currentNumber.textContent
		currentNumber.textContent = parseFloat(previousResult) - parseFloat(currentResult)
		previousNumber.textContent = currentNumber.textContent
		previousResult = previousNumber.textContent
		previousNumber.textContent += ' -'
		id = 1
	} else if (currentNumber.textContent == '') {
		currentNumber.textContent = '-'
	}
}

const multiplyOperation = () => {
	if (previousNumber.textContent == '' && currentNumber.textContent !== '' && id == 0) {
		previousResult = currentResult
		previousNumber.textContent = previousResult
		previousNumber.textContent += '*'
		currentNumber.textContent = ''
	} else if (previousNumber.textContent !== '' && id == 0) {
		currentResult = currentNumber.textContent
		currentNumber.textContent = parseFloat(previousResult) * parseFloat(currentResult)
		previousNumber.textContent = currentNumber.textContent
		previousResult = previousNumber.textContent
		previousNumber.textContent += '*'
		id = 1
	}
}

const divideOperation = () => {
	if (previousNumber.textContent == '' && currentNumber.textContent !== '' && id == 0) {
		previousResult = currentResult
		previousNumber.textContent = previousResult
		previousNumber.textContent += '/'
		currentNumber.textContent = ''
	} else if (previousNumber.textContent !== '' && id == 0) {
		currentResult = currentNumber.textContent
		currentNumber.textContent = parseFloat(previousResult) / parseFloat(currentResult)
		previousNumber.textContent = currentNumber.textContent
		previousResult = previousNumber.textContent
		previousNumber.textContent += '/'
		id = 1
	}
}

const equalOperation = () => {
	if (currentNumber.textContent !== '' && previousNumber.textContent !== '' && id == 0) {
		currentResult = currentNumber.textContent
		previousNumber.textContent += currentResult
		previousNumber.textContent += '='

		if (previousNumber.textContent.includes('+')) {
			currentNumber.textContent = parseFloat(currentResult) + parseFloat(previousResult)
			id = 2
		} else if (previousNumber.textContent.includes('-')) {
            currentNumber.textContent = parseFloat(previousResult) - parseFloat(currentResult)
			id = 2
        } else if (previousNumber.textContent.includes('*')) {
            currentNumber.textContent = parseFloat(currentResult) * parseFloat(previousResult)
			id = 2
        } else if (previousNumber.textContent.includes('/')) {
            currentNumber.textContent = parseFloat(previousResult) / parseFloat(currentResult)
			id = 2
        }
	}
}

const dotAdd = () => {
	if (currentNumber.textContent.includes('.') && currentNumber.textContent == '') {
	} else if (currentNumber.textContent !== '' && id == 0) {
		currentNumber.textContent += '.'
	}
}

const deleteLastCharacter = () => {
    if(previousNumber.textContent.includes('=')) {

    } else if(currentNumber.textContent !== '') {
        currentNumber.textContent = currentNumber.textContent.slice(0, -1)
        currentResult = currentNumber.textContent
    }
}

const deleteAllContent = () => {
    currentResult = ''
    previousResult = ''
    id = 0
    currentNumber.textContent = ''
    previousNumber.textContent = ''
}

numbers.forEach(number => number.addEventListener('click', addNumbers))
plusSign.addEventListener('click', addOperation)
minusSign.addEventListener('click', substractOperation)
multiplySign.addEventListener('click', multiplyOperation)
divisionSign.addEventListener('click', divideOperation)
equalSign.addEventListener('click', equalOperation)
dotSign.addEventListener('click', dotAdd)
backTool.addEventListener('click', deleteLastCharacter)
resetTool.addEventListener('click', deleteAllContent)

