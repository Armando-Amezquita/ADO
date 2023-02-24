import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { login } from '../../store/features/users/usersSlice';
import './Login.css';

export function Login() {

    const [user, setUser] = useState({
        email: null,
        password: null
    })
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
    }

    return (
        <main>
            <section className="left">
                <p>Logo</p>
                <h1>¡Welcome! <br/> Sign to Start</h1>
            </section>
            <section className="rigth">

                <form onSubmit={handleSubmit} >
                    <p className="title-form">Enter your credentials</p>
                    <label htmlFor="email">Ingrese su correo electronico</label>
                    <input onChange={handleChange} type="text" name="email" id='email' placeholder="yourname@gmail.com" />
                    
                    <label htmlFor="password">Ingrese su contraseña </label>
                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="SmallTigger21" />

                    <div className='form_container'>
                        <input className="check" type="checkbox" name="check" id='check'  />
                        <label htmlFor="check">Recuerdame</label>
                    </div>
                    <div className='form_container'>
                        <p>Not a member?</p>
                    </div>
                    <button className='button__login'>Ingresar</button>
                </form>
            </section>
        </main>
    )
}
