import React from "react";

export const NotFound = ({text}) => {
    return (
        <div className="not-found col-12 min-vh-100 w-100 d-flex
        justify-content-center align-items-center flex-column">
            <h1 className='d-block'>Ooops...</h1>
            <h3 className='d-block'>{text}</h3>
        </div>
    )
}