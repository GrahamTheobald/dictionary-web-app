import React from 'react'
import moon from '../assets/images/icon-moon.svg'
import './DarkMode.css'

export default function DarkMode() {
	return (
		<div className='switch'>
			<div className='switch__track'>
				<div className='switch__toggle'></div>
			</div>
			<img src={moon} alt='moon' />
		</div>
	)
}
