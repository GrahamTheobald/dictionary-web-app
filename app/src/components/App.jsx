import { useState, useEffect } from 'react'
import useFetchWord from '../hooks/useFetchWord'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Word from './Word'
import './App.css'

export const FONTS = {
	SERIF: 'Serif',
	SANS: 'Sans-Serif',
	MONO: 'Mono',
}

function App() {
	const [activeFont, setActiveFont] = useState(FONTS.SANS)
	const [word, setWord] = useState('hello')
	const [data, setData] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()
	const [dark, setDark] = useState(false)

	const {
		data: fetchData,
		error: fetchError,
		loading: fetchLoading,
	} = useFetchWord(word)

	useEffect(() => {
		if (fetchLoading) {
			setLoading(true)
		} else {
			setLoading(false)
		}
		if (fetchError) {
			setError(fetchError)
		} else {
			setError(null)
		}
		if (fetchData) {
			setData(fetchData[0])
		}
	}, [fetchLoading, fetchError, fetchData])

	function handleSetWord(word) {
		setWord(word)
	}
	function handleSetFont(font) {
		setActiveFont(font)
	}
	function handleSetDark() {
		setDark((prev) => !prev)
	}

	let className = 'App ' + activeFont
	let container = 'container '
	container += dark ? 'dark' : ''

	return (
		<div className={container}>
			<div className={className}>
				<NavBar
					activeFont={activeFont}
					handleSetDark={handleSetDark}
					handleSetFont={handleSetFont}
				/>
				<SearchBar handler={handleSetWord} />
				{data && <Word data={data} handleWord={handleSetWord} />}
				{!loading && !data && (
					<div className='void'>
						<h1 className='void__title'>😕</h1>
						<p className='void__subtitle'>No definitions Found</p>
						<p className='void__copy'>
							Sorry pal, we couldn't find definitions for the word you were
							looking for. You can try the search again at later time or head to
							the web instead.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
