import React, { useState, useEffect } from 'react'
import magnifyer from '../assets/images/icon-search.svg'
import './SearchBar.css'

export default function SearchBar({ handler }) {
	const [input, setInput] = useState('')
	const [className, setClassName] = useState('search ')

	useEffect(() => {
		if (input !== '') {
			setClassName('search ')
		}
	}, [input])

	function handleEnter() {
		if (input.trim() === '') {
			setClassName((prev) => (prev += 'empty'))
			return
		}
		handler(input)
		setInput('')
	}
	return (
		<div className={className}>
			<input
				className='search__input'
				value={input}
				placeholder='Search for any word..'
				autoFocus
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						handleEnter()
					}
				}}
				onChange={(e) => setInput(e.target.value)}
			/>
			<img
				src={magnifyer}
				alt='magnifying glass'
				onClick={() => handleEnter()}
			/>
		</div>
	)
}
