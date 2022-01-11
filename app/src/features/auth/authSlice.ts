import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export interface AuthState {
  token: string;
  isLoggedin: boolean;
}

const initialState : AuthState = {
  token: "", // <- FIX,
  isLoggedin: false // <- FIX,
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (data: {email: string, password: string}) => {
    const response = await axios.post<{token: string}>(
      `http://localhost:3010/auth/login`, data
    );
    console.log(response.data)
    return response.data;
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {        
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoggedin = false;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {      
      state.isLoggedin = true;
      state.token = action.payload.token;      
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoggedin = false;     
    });
  }

})

export default authSlice.reducer;