import React from "react";
import {NavLink} from "react-router-dom";

export const NotFound = React.memo(({text}) => (
        <div className="not-found col-12 min-vh-100 w-100 d-flex
        justify-content-center align-items-center flex-column">
            <h1 className='d-block'>Ooops...</h1>
            <h3 className='d-block'>{text}</h3>
            <NavLink className='back text-center' to={'/'}>
                to main screen
            </NavLink>
        </div>
    )
)