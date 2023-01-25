import React from 'react'
import moon from '../assets/images/icon-moon.svg'
import './DarkMode.css'

export default function DarkMode({ handler }) {
	return (
		<div className='switch'>
			<div onClick={() => handler()} className='switch__track'>
				<div className='switch__toggle'></div>
			</div>
			<img src={moon} alt='moon' />
		</div>
	)
}
