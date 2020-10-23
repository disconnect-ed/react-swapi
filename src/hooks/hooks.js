import {useState, useEffect} from 'react'

export const useFetch = (url, initialValue, toggleLoading) => {
    const [data, setData] = useState(initialValue)

    const getDataFromApi = async (url) => {
        toggleLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        } catch (e) {
            console.log(e)
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        getDataFromApi(url)
    }, [url])

    return data
}