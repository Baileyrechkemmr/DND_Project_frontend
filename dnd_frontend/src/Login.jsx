import React, { useRef, useState, useEffect } from 'react'

const Login = (props) => {
	const userRef = useRef()
	const errRef = useRef()
	// user State
	const [user, setUser] = useState('')
	// password State
	const [pwd, setPwd] = useState('')
	//  error msg state
	const [errMsg, setErrMsg] = useState('')
	// success state
	const [success, setSuccess] = useState(false)
	// useEffects
	useEffect(() => {
		userRef.current.focus()
	}, [])
	// use effect for error
	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user, pwd)
		setUser('')
		setPwd('')
		setSuccess(true)
	}

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<br />
					<p>
						<button onClick={() => props.onFormSwitch('npc')}>
							go to home
						</button>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='username'
							ref={userRef}
							autoComplete='off'
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							id='password'
							ref={userRef}
							autoComplete='off'
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
						<button type='submit'>sign in</button>
					</form>
					<button onClick={() => props.onFormSwitch('register')}>
						if you don't have an account? Register here.
					</button>
				</section>
			)}
		</>
	)
}

export default Login
