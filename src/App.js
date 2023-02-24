// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Form } from './components/Form';
// import { Home } from './pages';
// import { ProtectedRoute } from './components/ProtectedRoutes';
// import './App.css';

// function App(){

//   const [user, setUser] = useState(null)

//   const login = () =>{
//     setUser({
//       id: 1, 
//       name: 'Armando'
//     })
//   }

//   const loguot = () => {
//     setUser(null)
//   }


//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Nav />
//         {
//           user ? (
//             <button onClick={loguot}>salir</button>
//           ): (
//             <button onClick={login}>Entrar</button>
//           )
//         }
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path='/home' element={
//             <ProtectedRoute user={user}>
//               <Home />
//             </ProtectedRoute>
//           } />
//           <Route path='/form' element={<Form />} />
//           <Route path='/otracosa' element={<h1>Hola mundo</h1>} />
//           <Route path='*' element={<p>Not found</p>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Nav(){
//   return (
//     <nav>
//       <li>
//         <Link to="/home">Home</Link>
//       </li>
//       <li>
//         <Link to="/form">form</Link>
//       </li>
//       <li>
//         <Link to="/otracosa">otras cosa</Link>
//       </li>
//     </nav>
//   )
// }

import { RoutesView } from "./routes";
import { useSelector } from "react-redux";

function App() {
  // const tasks = useSelector(state => state.tasks.data)
  // console.log('tasks', tasks)
  return (
    <RoutesView />
    // <div className="App">
    //   hola mundo
    //   {
    //     tasks?.map(ele => (
    //       <p>{ele}</p>
    //     ))
    //   }
    //   <Form />
    // </div>
  );
}

export default App;
