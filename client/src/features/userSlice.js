import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    login:false,
    email:'',
    name:'',
    token:'',
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        Authorization:(state,action)=>{
            state.login = action.payload.login
            state.email = action.payload.email
            state.name =action.payload.name
        }
    }
})

// const initialState = [

// ]

// const postSlice = createSlice({
//     name:'products',
//     initialState,
//     reducers:{
//         postAdded:(state,action)=>{
//             state.push(action.payload)
//         }
//     }
// })

export const {Authorization} = userSlice.actions; 

export default userSlice.reducer;