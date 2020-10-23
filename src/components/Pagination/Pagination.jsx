import React from "react";

const Pagination = ({changePage, prev, next }) => {

    return (
        <div className='pagination m-auto pb-4'>
            <button className='prev pagination-btn btn-primary'
                    onClick={() => changePage(prev)}
                    disabled={!prev}
            >Prev</button>
            <button className='prev pagination-btn btn-primary'
                    onClick={() => changePage(next)}
                    disabled={!next}
            >Next</button>
        </div>
    )
}

export default Pagination
