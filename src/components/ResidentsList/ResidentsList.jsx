import React from "react";
import {Table} from "react-bootstrap";

export const ResidentsList = ({residents}) => (
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