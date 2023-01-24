import React, { useState } from 'react'
import chevron from '../assets/images/icon-arrow-down.svg'
import './FontSelector.css'

export default function FontSelector({ activeFont }) {
	const [listOpen, setListOpen] = useState(false)
	let listClass = 'fonts__list'
	listClass += listOpen ? ' open' : ''
	return (
		<div className='fonts'>
			<div
				className='fonts__active'
				onClick={() => setListOpen((prev) => !prev)}
			>
				<p>{activeFont}</p>
				<img src={chevron} alt='chevron' />
			</div>
			<ul className={listClass}>
				<li className='Sans-Serif'>Sans Serif</li>
				<li className='Serif'>Serif</li>
				<li className='Mono'>Mono</li>
			</ul>
		</div>
	)
}
