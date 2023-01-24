import { useState, useEffect } from 'react'
import useFetchWord from '../hooks/useFetchWord'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

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

	return (
		<div className='App'>
			<NavBar activeFont={activeFont} />
			<SearchBar handler={handleSetWord} />
		</div>
	)
}

export default App
