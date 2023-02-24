import React from "react";
import './Paginado.css'

export default function Paginado ({ numOfPages, pagination }){
    
    const pages = [];
    for (let i = 1; i <= numOfPages; i++) {
        pages.push(i)
    }

    const renderPage = pages.map(page => (
        <li key={page}> 
            <button className="buttons" onClick={e => pagination(e, page)}>{ page } </button>
        </li>
    ))

    return (
        <nav className="nav">
            <ul className="container" >{renderPage}</ul>
        </nav>
    )
}