import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Post.css';

export function Post() {

    const [data, setData] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setData(data)
            
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='container__post'>
            <button className='post__button'>
                <Link to={'/home'}>Volver</Link>
            </button>
            <div className='container__post-card'>
                {
                    data? 
                    (
                        <div className='card__post'>
                            <h2>{data.title}</h2>
                            <img className='container__post-img' src={data.url} alt={data.url} />
                        </div>
                        
                    )
                    : <p>Hola mundo</p>
                }
            </div>
        </div>

        
    )
}
