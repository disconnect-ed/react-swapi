import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import {ResidentsList} from "./ResidentsList";

export const ResidentsListContainer = ({list}) => {
    const [isLoading, toggleLoading] = useState(true)
    const [residents, setResidents] = useState(null)
    useEffect(() => {
        toggleLoading(true)
        if (list.length) {
            const promises = list.map(url => fetch(url).then(item => item.json()))
            Promise.all(promises).then(item => setResidents(item))
        }
        toggleLoading(false)
    }, [list])

    if (isLoading) return <Spinner className='m-auto' animation="border" variant="primary" />

    if (!residents) return <h3 className='text-center'>The list of residents is empty</h3>

    return <ResidentsList residents={residents}/>
}