import { createContext, useState } from 'react'

export const Dogs_data = createContext(null)

export default function Context({ children }) {
	const [dogsArr, setDogsArr] = useState()

	return (
		<Dogs_data.Provider value={(dogsArr, setDogsArr)}>
			{children}
		</Dogs_data.Provider>
	)
}
