import React, { useState } from 'react'
import magnifyer from '../assets/images/icon-search.svg'
import './SearchBar.css'

export default function SearchBar({ handler }) {
	const [input, setInput] = useState('')
	return (
		<div className='search'>
			<input
				className='search__input'
				value={input}
				placeholder='Search for any word..'
				autoFocus
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						setInput('')
						handler(input)
					}
				}}
				onChange={(e) => setInput(e.target.value)}
			/>
			<img
				src={magnifyer}
				alt='magnifying glass'
				onClick={() => {
					setInput('')
					handler(input)
				}}
			/>
		</div>
	)
}
