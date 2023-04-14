// import React, { useRef, useState, useEffect, useContext } from 'react'
// import AuthContext from "./context/AuthProvider"

// import axios from 'axios'
// const LOGIN_URL = 'http://localhost:8000/v1/token/login' //use url for login

// const Login = (props) => {
// 	const { setAuth } = useContext(AuthContext);
// 	const userRef = useRef()
// 	const errRef = useRef()
// 	// user State
// 	const [user, setUser] = useState('')
// 	// password State
// 	const [pwd, setPwd] = useState('')
// 	//  error msg state
// 	const [errMsg, setErrMsg] = useState('')
// 	// success state
// 	const [success, setSuccess] = useState(false)
// 	// useEffects
// 	useEffect(() => {
// 		userRef.current.focus()
// 	}, [])
// 	// use effect for error
// 	useEffect(() => {
// 		setErrMsg('')
// 	}, [user, pwd])

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
		
// 		try {
// 			const response = await axios.post(
// 				LOGIN_URL,
// 				JSON.stringify({ user, pwd }),
// 				{
// 					headers: { 'Content-Type': 'application/json' },
// 					withCredentials: true,
// 				}
// 			)
// 			console.log(JSON.stringify(response?.data))
// 			const accessToken = response?.data?.accessToken
// 			const roles = response?.data?.roles
// 			setAuth({ user, pwd, roles, accessToken })
// 			setUser('')
// 			setPwd('')
// 			setSuccess(true)
// 		} catch (err) {
// 			if (!err?.response) {
// 				setErrMsg('no Server Response')
// 			} else if (err.response?.status === 400) {
// 				setErrMsg('missing username or password')
// 			} else if (err.response?.status === 401) {
// 				setErrMsg('unauthorized')
// 			} else {
// 				setErrMsg('login failed')
// 			}
// 			errRef.current.focus()
// 		}
// 	}

// 	return (
// 		<>
// 			{success ? (
// 				<section>
// 					<h1>Success!</h1>
// 					<br />
// 					<p>
// 						<button onClick={() => props.onFormSwitch('npc')}>
// 							go to home
// 						</button>
// 					</p>
// 				</section>
// 			) : (
// 				<section>
// 					<p
// 						ref={errRef}
// 						className={errMsg ? 'errmsg' : 'offscreen'}
// 						aria-live='assertive'
// 					>
// 						{errMsg}
// 					</p>
// 					<h1>Sign In</h1>
// 					<form onSubmit={handleSubmit}>
// 						<label htmlFor='username'>Username:</label>
// 						<input
// 							type='text'
// 							id='username'
// 							ref={userRef}
// 							autoComplete='off'
// 							onChange={(e) => setUser(e.target.value)}
// 							value={user}
// 							required
// 						/>
// 						<label htmlFor='password'>Password:</label>
// 						<input
// 							type='password'
// 							id='password'
// 							ref={userRef}
// 							autoComplete='off'
// 							onChange={(e) => setPwd(e.target.value)}
// 							value={pwd}
// 							required
// 						/>
// 						<button type='submit'>sign in</button>
// 					</form>
// 					<button onClick={() => props.onFormSwitch('register')}>
// 						if you don't have an account? Register here.
// 					</button>
// 				</section>
// 			)}
// 		</>
// 	)
// }

//export default Login
