import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  let [npc, setNpc] = useState([])


  // get npc function
  const getNpc = () => {
		axios
			.get('http://localhost:8000/api/npc')
			.then(
				(response) => setNpc(response.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}

	useEffect(() => {
		getNpc()
	}, [])

	return (
		<>
			<h1>App</h1>
		</>
	)
}

export default App