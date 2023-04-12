import React, { useState, useEffect } from 'react'
// css
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// axios call / components
import axios from 'axios'
import Add from './components/Npc_add'
import Edit from './components/Npc_edit'
// bootstrap stuff
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const App = () => {
	let [npc, setNpc] = useState([])

  // get npc function
	// get npc function
	const getNpc = () => {
		axios
			.get('http://localhost:8000/npc')
			.then(
				(response) => setNpc(response.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}


	// create npc function
	const handleCreate = (newNpc) => {
		axios.post('http://localhost:8000/npc', newNpc).then((res) => {
			console.log(res)
			getNpc()
		})
	}

	// delete function

	const handleDelete = (event) => {
		axios
			.delete(`http://localhost:8000/npc/${event.target.value}`)
			.then((response) => {
				getNpc()
			})
	}

	// edit function
	const handleUpdate = (editNpc) => {
		console.log(editNpc)
		axios
			.put(`http://localhost:8000/npc/${editNpc.id}`, editNpc)
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
				<Row xs={2} md={3}>
					{npc.map((npc) => {
						return (
							
								<CardGroup>
									<Card style={{ width: '23rem' }}>
										<Card.Img variant='top' src='holder.js/100px160' />
										<Card.Body>
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
										</Card.Body>
										<Card.Footer>
											<Edit handleUpdate={handleUpdate} npc={npc} />
										</Card.Footer>
										<Button href=''>Go somewhere</Button>
										<Button onClick={handleDelete} value={npc.id}>
											delete npc
										</Button>
									</Card>
								</CardGroup>
							
						)
					})}
				</Row>
			</div>
		</div>
	)
}

export default App
