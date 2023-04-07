import React, {useState} from "react"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='youremail@email.com'
					id='email'
					name='email'
				/>
				<label htmlFor='password'>password</label>
				<input
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					type='password'
					placeholder='*********'
					id='password'
					name='password'
				/>
				<button type='submit'>Log in</button>
			</form>
			<button onClick={() => props.onFormSwitch('register')}>
				if you don't have an account? Register here.
			</button>
		</>
	)
}

export default Login
