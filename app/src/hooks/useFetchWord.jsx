import { useState, useEffect } from 'react'

export default function useFetchWord(word) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
				)
				const json = await response.json()
				setData(json)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}
		fetchData()
	}, [word])

	return { data, error, loading }
}
