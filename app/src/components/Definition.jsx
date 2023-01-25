import React from 'react'

export default function Definition({ Definition }) {
	const { definition, example } = Definition
	return (
		<li className='definition__def'>
			<p>{definition}</p>
			{example && <p className='definition__example'>{example}</p>}
		</li>
	)
}
