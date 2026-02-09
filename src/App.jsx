import { useState } from 'react'
import './index.css'

function Calculator() {
	const [displayInput, setDisplayInput] = useState('0')

	function plusOne() {
		const current = eval(displayInput)
		setDisplayInput(current + 1).toString()
	}

	function minusOne() {
		const current = eval(displayInput)
		setDisplayInput(current - 1).toString()
	}

	function changeDisplayInput(changeValue) {
		if (changeValue === 'C') {
			setDisplayInput('0')
			return
		} else if (changeValue === '=') {
			setDisplayInput(eval(displayInput)).toString()
			return
		}
		setDisplayInput(prev => (prev === '0' ? changeValue : prev + changeValue))
		return
	}

	console.log(displayInput)
	console.log(typeof displayInput)
	return (
		<div className='calculator-container'>
			<h1 className='calculator-title'>UseState Calculator</h1>
			<div className='calculator'>
				<div className='display'>{displayInput}</div>
				<div className='increment-buttons'>
					<button className='increment' onClick={() => plusOne()}>
						+1
					</button>
					<button className='decrement' onClick={() => minusOne()}>
						-1
					</button>
				</div>
				<div className='buttons'>
					<button onClick={() => changeDisplayInput('7')}>7</button>
					<button onClick={() => changeDisplayInput('8')}>8</button>
					<button onClick={() => changeDisplayInput('9')}>9</button>
					<button className='operator' onClick={() => changeDisplayInput('+')}>
						+
					</button>
					<button onClick={() => changeDisplayInput('4')}>4</button>
					<button onClick={() => changeDisplayInput('5')}>5</button>
					<button onClick={() => changeDisplayInput('6')}>6</button>
					<button onClick={() => changeDisplayInput('-')}>-</button>
					<button onClick={() => changeDisplayInput('1')}>1</button>
					<button onClick={() => changeDisplayInput('2')}>2</button>
					<button onClick={() => changeDisplayInput('3')}>3</button>
					<button className='operator' onClick={() => changeDisplayInput('*')}>
						×
					</button>
					<button onClick={() => changeDisplayInput('0')}>0</button>
					<button onClick={() => changeDisplayInput('.')}>,</button>
					<button className='equals' onClick={() => changeDisplayInput('=')}>
						=
					</button>
					<button className='operator' onClick={() => changeDisplayInput('/')}>
						÷
					</button>
					<button className='clear' onClick={() => changeDisplayInput('C')}>
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
