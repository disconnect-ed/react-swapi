import React from "react";
import {Spinner} from "react-bootstrap";

export const CustomSpinner = React.memo(() => (
    <div className='spinner'>
        <div>
            <h3 className='spinner-title'>LOADING</h3>
            <Spinner animation="border" variant="primary" />
        </div>
    </div>
))