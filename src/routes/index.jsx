import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { ProtectedRoute } from '../components/ProtectedRoutes';
import { Post } from '../components/Post/Post';

export function RoutesView(){

  const user = localStorage.getItem('user')
 
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
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
