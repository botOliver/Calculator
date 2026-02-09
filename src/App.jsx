import { useState } from 'react'
import './index.css'

//Rus
//1 - Создайте состояние input, которое будет отображать результат вычислений в калькуляторе.
//2 - Создайте 2 функции для увеличения или уменьшения значения input на +1 или -1 и назначьте их на кнопки +1 / -1.
//3 - Создайте функцию, которая будет выполнять определенную операцию на калькуляторе в зависимости от нажатой кнопки. В результате работы этой функции должен получиться полностью рабочий калькулятор. Используйте эту функцию в обработчиках событий для всех кнопок.

//P.S. Если сложно продумать одну универсальную функцию, можете создать столько функций, сколько нужно. Не переживайте о чистоте кода.

//P.P.S. В JavaScript есть метод eval(), который преобразует любую строку в JavaScript-выражение.
//Пример: eval("console.log('Hello')") — выполнит этот код.
// Используйте этот метод для всех операций в калькуляторе.

//Eng

//Eng
//1 - Create a state variable input to display the result of calculations in the calculator.
//2 - Create two functions to increase or decrease the value of input by +1 or -1, and assign them to the +1 / -1 buttons.
//3 - Create a function that will perform a specific operation in the calculator based on the button pressed. This function should result in a fully functional calculator. Use this function in the event handlers for all buttons.

//P.S. If it’s difficult to design a universal function, feel free to create as many functions as you need. Don’t worry about code cleanliness.

//P.P.S. JavaScript has a method eval() that transforms any string into a JavaScript expression.
//Example: eval("console.log('Hello')") will execute this code.
// Use this method for all operations in the calculator.

// function incrementPlus() {
// 	setDisplayInput(prev => prev + 1)
// }

function Calculator() {
	const [displayInput, setDisplayInput] = useState(0)

	function equals(equals) {
		setDisplayInput(eval(equals))
	}

	function changeDisplayOperator(changeOperator) {
		setDisplayInput(prev => prev + changeOperator)
	}

	function changeDisplayInput(changeNumber) {
		setDisplayInput(prev => (prev == 0 ? changeNumber : prev + changeNumber))
	}
	return (
		<div className='calculator-container'>
			<h1 className='calculator-title'>UseState Calculator</h1>
			<div className='calculator'>
				<div className='display'>{displayInput}</div>
				<div className='increment-buttons'>
					<button
						className='increment'
						onClick={() => setDisplayInput(prev => prev + 1)}
					>
						+1
					</button>
					<button
						className='decrement'
						onClick={() => setDisplayInput(prev => prev - 1)}
					>
						-1
					</button>
				</div>
				<div className='buttons'>
					<button onClick={() => changeDisplayInput('7')}>7</button>
					<button onClick={() => changeDisplayInput('8')}>8</button>
					<button onClick={() => changeDisplayInput('9')}>9</button>
					<button
						className='operator'
						onClick={() => changeDisplayOperator('+')}
					>
						+
					</button>
					<button onClick={() => changeDisplayInput('4')}>4</button>
					<button onClick={() => changeDisplayInput('5')}>5</button>
					<button onClick={() => changeDisplayInput('6')}>6</button>
					<button onClick={() => changeDisplayOperator('-')}>-</button>
					<button onClick={() => changeDisplayInput('1')}>1</button>
					<button onClick={() => changeDisplayInput('2')}>2</button>
					<button onClick={() => changeDisplayInput('3')}>3</button>
					<button
						className='operator'
						onClick={() => changeDisplayOperator('*')}
					>
						×
					</button>
					<button onClick={() => changeDisplayInput('0')}>0</button>
					<button onClick={() => changeDisplayOperator('.')}>,</button>
					<button className='equals' onClick={() => equals(displayInput)}>
						=
					</button>
					<button
						className='operator'
						onClick={() => changeDisplayOperator('/')}
					>
						÷
					</button>
					<button className='clear' onClick={() => setDisplayInput('0')}>
						C
					</button>
				</div>
			</div>
			<div className='technologies-used'>
				<p>
					<strong>Technologies used:</strong> React, JSX, CSS Modules,
					JavaScript (useState, events handling)
				</p>
			</div>
		</div>
	)
}

export default Calculator
