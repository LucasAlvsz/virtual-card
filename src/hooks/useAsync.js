import { useState, useEffect } from "react"

const useAsync = (asyncFunction, immediate = true) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(immediate)
	const [error, setError] = useState(null)

	const execute = async (...args) => {
		setLoading(true)
		setError(null)
		try {
			const data = await asyncFunction(...args)
			setData(data)
			setLoading(false)
			return data
		} catch (err) {
			setError(err)
			setLoading(false)
			throw err
		}
	}

	useEffect(() => {
		if (immediate) execute()
	}, [execute, immediate])

	return { execute, data, error, loading }
}

export default useAsync
