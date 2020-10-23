import React, {useState, useEffect} from "react";
import {Spinner, Table} from "react-bootstrap";

export const ResidentsList = ({list}) => {
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

    console.log(residents)
    if (isLoading) return <Spinner className='m-auto' animation="border" variant="primary" />

    if (!residents) return <h3 className='text-center'>Residents list null</h3>

    return (
        <div className='residents'>
            <h3 className='text-center pt-4 pb-4'>Residents list</h3>
            <Table variant="dark" striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {residents.map(item => <tr key={item.name}>
                        <td>{item.name || '-'}</td>
                        <td>{item.height || '-'}</td>
                        <td>{item.mass || '-'}</td>
                        <td>{item.gender || '-'}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}