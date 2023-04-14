import React, { useState, useEffect } from 'react'
// css
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// axios call / components
import axios from 'axios'
import Add from './Npc_add'
import Edit from './Npc_edit'
// bootstrap stuff
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Npc = (props) => {
	let [npc, setNpc] = useState([])

	// get npc function
	// get npc function
	const getNpc = () => {
		axios
			.get('https://dnd-backend-qq19.onrender.com/npc')
			.then(
				(response) => setNpc(response.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}

	// create npc function
	const handleCreate = (newNpc) => {
		axios
			.post('https://dnd-backend-qq19.onrender.com/npc', newNpc)
			.then((res) => {
				console.log(res)
				getNpc()
			})
	}

	// delete function

	const handleDelete = (event) => {
		axios
			.delete(`https://dnd-backend-qq19.onrender.com/npc/${event.target.value}`)
			.then((response) => {
				getNpc()
			})
	}

	// edit function
	const handleUpdate = (editNpc) => {
		console.log(editNpc)
		axios
			.put(`https://dnd-backend-qq19.onrender.com/npc/${editNpc.id}`, editNpc)
			.then((res) => {
				getNpc()
			}) 
	}

	useEffect(() => {
		getNpc()
	}, [])

	return (
		<div className='npcPage'>
			<h1>Npc Tracker</h1>
			<Add handleCreate={handleCreate} />
			<div className='npc'>
				
					{npc.map((npc) => {
						return (
							<Card style={{ width: '23rem' }}>
								<Card.Body className='npcCards'>
									<Card.Title>{npc.name}</Card.Title>
									<Card.Text>
										Age: {npc.age}
										<br />
										quirk: {npc.quirk}
										<br />
										race: {npc.race}
										<br />
										alignment: {npc.alignment}
										<br />
										job: {npc.job}
										<br />
										Description: {npc.description}
									</Card.Text>
									<Edit handleUpdate={handleUpdate} npc={npc} />
									<br />
									<br />
									<Button className="delete button"onClick={handleDelete} value={npc.id}>
										delete npc
									</Button>
								</Card.Body>
								{/* <Button onClick={() => props.onFormSwitch('detail')}>show npc</Button> */}
							</Card>
						)
					})}
					
				
			</div>
		</div>
	)
}

export default Npc
