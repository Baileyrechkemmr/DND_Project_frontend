import React, { useState } from 'react';

// css
import './css/App.css'
// axios call / components
import Npc from './components/Npc'
import Details from './components/Details'
const App = () => {

	const [currentForm, setCurrentForm] = useState('Npc')

	const toggleForm = (formName) => {
		setCurrentForm(formName)
	}

	return (
		<div className='loginPage'>
			{/* {currentForm === 'npc' ? (
				<Npc onFormSwitch={toggleForm} />
			) : (
				<Details onFormSwitch={toggleForm} />
			)} */}
			<Npc/>
		</div>
	)
}
export default App
