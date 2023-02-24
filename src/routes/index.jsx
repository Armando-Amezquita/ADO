import { useState } from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { ProtectedRoute } from '../components/ProtectedRoutes';
import { Post } from '../components/Post/Post';

export function RoutesView(){

  const [user, setUser] = useState(null)

  const login = () =>{
    setUser({
      id: 1, 
      name: 'Armando'
    })
  }

  const loguot = () => {
    setUser(null)
  }


  return (
    <div className='App'>
      <BrowserRouter>
        {/* {
          user ? (
            <button onClick={loguot}>salir</button>
          ): (
            <button onClick={login}>Entrar</button>
          )
        } */}
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={
            // <ProtectedRoute user={user}>
              <Home />
            // </ProtectedRoute>
          } />
          <Route path='/post/:id' element={<Post />}/>
          <Route path='*' element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
