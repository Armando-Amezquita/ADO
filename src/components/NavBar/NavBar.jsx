import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

export function NavBar() {

  const user = localStorage.getItem('user')

    return (
      <div className='container__nav'>
        <h2>Logo</h2>
        <nav className='menu_nav'>
          {
            routes.map(route => (
              <li className='nav_link' key={route.id}>
                <Link to={`/${route.url}`}> {route.url}</Link>
              </li>
            ))
          }

          {
            user ? 
            <li className='nav_link'>
              <Link to="/login">Salir</Link>
            </li>
            : 
            <li className='nav_link'>
              <Link to="/login">Ingresar</Link>
            </li>
          }
        </nav>
      </div>
    )
}

const routes = [
  {
    id: 1,
    url: 'home'
  },
  {
    id: 2,
    url: 'login'
  },
  {
    id: 3,
    url: 'logout'
  },
]
