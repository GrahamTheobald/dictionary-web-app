import React from 'react'
import FontSelector from './FontSelector'
import DarkMode from './DarkMode'
import logo from '../assets/images/logo.svg'
import './NavBar.css'

export default function NavBar({ activeFont, handleSetFont, handleSetDark }) {
	return (
		<nav className='nav'>
			<img src={logo} alt='dictionary' />
			<div className='nav__right'>
				<FontSelector activeFont={activeFont} handleSetFont={handleSetFont} />
				<DarkMode handler={handleSetDark} />
			</div>
		</nav>
	)
}
