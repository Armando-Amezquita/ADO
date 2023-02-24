import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../initialState"
import { Navigate } from "react-router-dom"
import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/photos"

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        },
        login: (state, action) => {
            if(state.find(ele => ele.email === action.payload.email && ele.password === action.payload.password)){
                localStorage.setItem("user", JSON.stringify(action.payload));
                return <Navigate to={'/home'} />
            }
        }

    }
})

export const fetchPost = () => async (dispatch) => {
    try {
        const response = await axios(url)
        dispatch(addData(response.data))
    } catch (error) {
        console.log(error)
    }
}

// export const userLogin = (data) => async (dispatch) => {
//     try {
//         if(state.find(ele => ele.email === action.payload.email && ele.password === action.payload.password)){
//             localStorage.setItem("user", JSON.stringify(action.payload));
//             return <Navigate to={'/home'} />
//         }
//         const response = await axios(url)
//         dispatch(login(data))
//     } catch (error) {
//         console.log(error)
//     }
// }

export const { addData, login } = usersSlice.actions
export default usersSlice.reducer