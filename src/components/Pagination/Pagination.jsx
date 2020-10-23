import React from "react";
import Button from "react-bootstrap/Button";

export const Pagination = React.memo(({changePage, prev, next}) => (
    <div className='pagination m-auto pb-4'>
        <Button className='prev pagination-btn btn-primary'
                onClick={() => changePage(prev)}
                disabled={!prev}
        >Prev</Button>
        <Button className='prev pagination-btn btn-primary'
                onClick={() => changePage(next)}
                disabled={!next}
        >Next</Button>
    </div>
))
