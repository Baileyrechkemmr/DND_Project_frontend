import React, { useRef, useState, useEffect } from 'react'
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from './api/axios'

//                  [upper/lower case][numbers0-9letters a-zA-Z] {between 3 and 23}
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
//                   [upper case][lower case][number between 0-9] [special character] {between 8 and 24}
const PWD_REGEX = /^(?=.#[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/
// url for regeter
const REGISTER_URL = '/' // get from django backend
const Register = (props) => {
	const userRef = useRef()
	const errRef = useRef()

	// user State
	const [user, setUser] = useState('')
	const [validName, setValidName] = useState(false)
	const [userFocus, setUserFocus] = useState(false)
	// password State
	const [pwd, setPwd] = useState('')
	const [validPwd, setValidPwd] = useState(false)
	const [pwdFocus, setPwdFocus] = useState(false)
	// match State
	const [matchPwd, setMatchPwd] = useState('')
	const [validMatch, setValidMatch] = useState(false)
	const [matchFocus, setMatchFocus] = useState(false)
	//  error msg state
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)
	// useEffects
	useEffect(() => {
		userRef.current.focus()
	}, [])
	// user use effect
	useEffect(() => {
		const result = USER_REGEX.test(user)
		console.log(result)
		console.log(user)
		setValidName(result)
	}, [user])
	// use effect for the password
	useEffect(() => {
		const result = PWD_REGEX.test(pwd)
		console.log(result)
		console.log(pwd)
		setValidName(result)
		const match = pwd === matchPwd
		setValidMatch(match)
	}, [pwd, matchPwd])
	// use effect for error
	useEffect(() => {
		setErrMsg('')
	}, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // prevent java hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid entry");
            return;
        }
        // valid date with back end
        try {
			const response = await axios.post(REGISTER_URL, 
				JASON.stringify({user, pwd}),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				}
			)
			console.log(response.data);
			console.log(response.accessToken);
			console.log(Json.stringify(response))
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("no Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Registration Faild");
		}
		errRef.current.focus();
    }

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<button onClick={() => props.onFormSwitch('login')}>
							Sign In
						</button>
					</p>
				</section>
			) : (
				<section>
					{/* ueser name feild */}
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>
							Username:
							<span className={validMatch ? 'valid' : 'hide'}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validName || !user ? 'hide' : 'invalid'}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input
							type='text'
							name='username'
							ref={userRef}
							autoComplete='off'
							onChange={(e) => setUser(e.target.value)}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby='uidnote'
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id='uidnote'
							className={
								userFocus && user && !validName ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>
						{/* password feild */}

						<label htmlFor='password'>
							Password:
							<span className={validPwd ? 'valid' : 'hide'}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validPwd || !pwd ? 'hide' : 'invalid'}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input
							type='text'
							name='password'
							onChange={(e) => setPwd(e.target.value)}
							required
							aria-invalid={validPwd ? 'false' : 'true'}
							aria-describedby='pwdnote'
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p
							id='pwdnote'
							className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{' '}
							<span aria-label='exclamation mark'>!</span>{' '}
							<span aria-label='at symbol'>@</span>{' '}
							<span aria-label='hashtag'>#</span>{' '}
							<span aria-label='dollar sign'>$</span>{' '}
							<span aria-label='percent'>%</span>
						</p>

						<label htmlFor='password'>
							Confirm Password:
							<span className={validMatch && matchPwd ? 'valid' : 'hide'}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input
							type='text'
							id='confirm_password'
							onChange={(e) => setMatchPwd(e.target.value)}
							required
							aria-invalid={validMatch ? 'false' : 'true'}
							aria-describedby='confirmnote'
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id='confirmnote'
							className={
								matchFocus && !validMatch ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first password input field.
						</p>
						{/* is disabled intell all feilds are met */}
						<button type='submit'
							
							disabled={!validName || !validPwd || !validMatch ? false : true}
						>
							Sign UP
						</button>
					</form>
					<p>
						Already registered?
						<br />
						<span className='line'>
							<button onClick={() => props.onFormSwitch('login')}>
								if you don't have an account? Register here.
							</button>
						</span>
					</p>
				</section>
			)}
		</>
	)
}

export default Register
