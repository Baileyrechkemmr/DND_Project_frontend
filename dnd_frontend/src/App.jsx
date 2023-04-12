import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Add from './components/Npc_add'
import Edit from './components/Npc_edit'

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
			.delete('http://localhost:8000/npc/' + event.target.value)
			.then((response) => {
				getNpc()
			})
	}

	// edit function
	const handleUpdate = (editNpc) => {
		console.log(editNpc)
		axios
			.put('http://localhost:8000/npc/' + editNpc.id, editNpc)
			.then((res) => {
				getNpc()
			})
	}

	useEffect(() => {
		getNpc()
	}, [])

	return (
		<>
			<h1>App</h1>
			<Add handleCreate={handleCreate} />
			<div className='npc'>
				{npc.map((npc) => {
					return (
						<div className='npc' key={npc.id}>
							<h4>Name: {npc.name}</h4>
							<h5>Age: {npc.age}</h5>
							<Edit handleUpdate={handleUpdate} npc={npc} />
							<button onClick={handleDelete} value={npc.id}>
								delete npc
							</button>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default App
