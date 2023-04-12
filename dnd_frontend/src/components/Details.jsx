import React, { useState } from 'react'


const Details = (props) => {

	return (
		<div className='DetailsPage'>
			
            <button onClick={() => props.onFormSwitch('npc')}>back to home</button>
		</div>
	)
}

export default Details
