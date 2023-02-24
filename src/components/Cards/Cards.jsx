import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

export function Cards({posts}) {
     
  return (
    <div>
        <h1 className='title'>Post</h1>
        <div className='cards'>
            {
                posts?.length > 0 ? posts?.map(post => (
                    <Card 
                        key={post.id} id={post.id} title={post.title} url={post.url} />
                ))
                : <h1>Cargando...</h1>
            }
        </div>
    </div>

  )
}
