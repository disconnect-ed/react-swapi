import React from "react";
import {Spinner} from "react-bootstrap";

const CustomSpinner = () => (
    <div className='spinner'>
        <div>
            <h3 className='spinner-title'>LOADING</h3>
            <Spinner animation="border" variant="primary" />
        </div>
    </div>
)

export default CustomSpinner