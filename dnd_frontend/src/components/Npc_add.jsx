import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// css
// import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
	const [npc, setNpc] = useState({ ...props.npc })
	//  create functions
	const handleChange = (event) => {
		setNpc({ ...npc, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleCreate(npc)
	}

	return (
		<div className='npcAdd'>
			<Container className='container'>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='form'>
						<Form.Label htmlFor='name'>Name: </Form.Label>
						<Form.Control
							type='text'
							name='name'
							value={npc.name}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='age'>Age: </Form.Label>
						<Form.Control
							type='number'
							name='age'
							value={npc.age}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='description'>description: </Form.Label>
						<Form.Control
							type='text'
							name='description'
							value={npc.description}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='job'>job: </Form.Label>
						<Form.Control
							type='text'
							name='job'
							value={npc.job}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='quirk'>quirk: </Form.Label>
						<Form.Control
							type='text'
							name='quirk'
							value={npc.quirk}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='race'>race: </Form.Label>
						<Form.Control
							type='text'
							name='race'
							value={npc.race}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='form'>
						<Form.Label htmlFor='alignment'>alignment: </Form.Label>
						<Form.Control
							type='text'
							name='alignment'
							value={npc.alignment}
							onChange={handleChange}
						/>
					</Form.Group>
					<br/>
					<Button className='btn' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	)
}

export default Add
