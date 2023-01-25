import React, { useState } from 'react'
import chevron from '../assets/images/icon-arrow-down.svg'
import './FontSelector.css'

export default function FontSelector({ activeFont, handleSetFont }) {
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
				<img className='fonts__chevron' src={chevron} alt='chevron' />
			</div>
			<ul className={listClass}>
				<li
					onClick={() => {
						setListOpen(false)
						handleSetFont('Sans-Serif')
					}}
					className='Sans-Serif'
				>
					Sans Serif
				</li>
				<li
					onClick={() => {
						setListOpen(false)
						handleSetFont('Serif')
					}}
					className='Serif'
				>
					Serif
				</li>
				<li
					onClick={() => {
						setListOpen(false)
						handleSetFont('Mono')
					}}
					className='Mono'
				>
					Mono
				</li>
			</ul>
		</div>
	)
}
