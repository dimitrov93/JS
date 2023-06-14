import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const initialState = [
    // { id: '0', name: 'Dude Lebowski' },
    // { id: '1', name: 'Neil Young' },
    // { id: '2', name: 'Dave Gray' }
]

export const fetchUsers = createAsyncThunk(`users/fetchUsers`, async () => {
    try {
        const res = await axios.get(USERS_URL)
        return [...res.data]
    } catch (error) {
        return error.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer