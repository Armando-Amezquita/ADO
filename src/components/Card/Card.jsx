import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './Card.css'

export default function Card ({ id, title, url }){

    return(
        <article className='card'>
            <Link to={`/post/${id}`}>
                <img className="card__img" src={url} alt={url} />
                <h1 className="card__title">{title}</h1>
            </Link>
        </article>
    )
}
