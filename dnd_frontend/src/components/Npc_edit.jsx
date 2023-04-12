import React, { useState } from 'react'

// css
// import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//only need props as a param if we are passing in props to this component (we are going to here).
const Edit = (props) => {
	let emptyNpc = {
		name: '',
		age: '',
		description: '',
		job: '',
		quirk: '',
		race: '',
		alignment: '',
	}
	const [npc, setNpc] = useState(emptyNpc)

	const handleChange = (event) => {
		setNpc({ ...npc, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleCreate(npc)
	}

	return (
		<div className='npcEdit'>
			<details>
				<summary>Edit Npc</summary>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name: </label>
					<input
						type='text'
						name='name'
						value={npc.name}
						onChange={handleChange}
					/>
					<br />
					<br />
					<label htmlFor='age'>Age: </label>
					<input
						type='number'
						name='age'
						value={npc.age}
						onChange={handleChange}
					/>

					<br />
					<br />
					<label htmlFor='description'>description: </label>
					<input
						type='text'
						name='description'
						value={npc.description}
						onChange={handleChange}
					/>

					<br />
					<br />
					<label htmlFor='job'>job: </label>
					<input
						type='text'
						name='job'
						value={npc.job}
						onChange={handleChange}
					/>

					<br />
					<br />
					<label htmlFor='quirk'>quirk: </label>
					<input
						type='text'
						name='quirk'
						value={npc.quirk}
						onChange={handleChange}
					/>

					<br />
					<br />
					<label htmlFor='race'>race: </label>
					<input
						type='text'
						name='race'
						value={npc.race}
						onChange={handleChange}
					/>

					<br />
					<br />
					<label htmlFor='alignment'>alignment: </label>
					<input
						type='text'
						name='alignment'
						value={npc.alignment}
						onChange={handleChange}
					/>
					<br />
					<br />
					<input type='submit' />
				</form>
			</details>
		</div>
	)
}

export default Edit
