import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from '../../components/NavBar/NavBar';
import { Cards } from '../../components/Cards/Cards';
import Paginado from '../../components/Paginado/Paginado';
import './Home.css'



export function Home() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1); 
    const [postPerPage, ] = useState(6);
    
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
            setData(data.slice(0, 30))
            
        }catch(err){
            console.log(err)
        }
    }

    const filterPost = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    let lastPostInPage = currentPage * postPerPage;  
    let firstPostInPage = lastPostInPage - postPerPage;
    let results = []
    if(!search){
        results = data?.slice(firstPostInPage, lastPostInPage);
    }else{
        results = data.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase()))
    }  

    const numOfPages = Math.ceil(data?.length / postPerPage);

    function pagination (e, page){
        e.preventDefault();
        setCurrentPage(page);
    }

    return (
        <>
        <NavBar />
        <div className='container__cards'>
            <form action="">
                <label htmlFor="search">Filtrar</label>
                <input onChange={filterPost} value={search} type="text" placeholder='Nombre del post' name='search' id='search'/>
            </form>
            <Cards posts={results}/>

            <Paginado numOfPages={numOfPages} pagination={pagination}/>
        </div>
        </>
    )
}
