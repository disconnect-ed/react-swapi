import {useState, useEffect} from 'react'

export const useFetch = (url, initialValue, toggleLoading) => {
    const [result, setResult] = useState(initialValue)

    const getDataFromApi = async (url) => {
        toggleLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setResult(data)
        } catch (e) {
            setResult(e)
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        getDataFromApi(url)
    }, [url])

    return result
}