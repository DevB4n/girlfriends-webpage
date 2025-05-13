import React from "react";
import ReactDOM from 'react-dom/client'

export const Tittles = ({text}) => {
    return (<React.Fragment>
        <div className='tittles'>
            <h1>{text}</h1>
        </div>
    </React.Fragment>)
}

export const StarterBanner = ({text}) =>{
    return(<React.Fragment>

        <div className="starterBanner">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <h1>{text}</h1>
        </div>

    </React.Fragment>)
}