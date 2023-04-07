import React, { useState } from 'react';

import Register from './Register';
import Login from './Login';

const App = () => {
	const [currentForm, setCurrentForm] = useState('Login')

	const toggleForm = (formName) => {
		setCurrentForm(formName)
	}
	return (
		<div className='loginPage'>
			{currentForm === 'login' ? (
				<Login onFormSwitch={toggleForm} />
			) : (
				<Register onFormSwitch={toggleForm} />
			)}
		</div>
	)
}

export default App