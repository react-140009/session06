import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../../app/store';
import { LoginModel } from "./LoginModel";



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
  async (data: LoginModel) => {
    const response = await axios.post<{token: string}>(
      `http://localhost:3010/auth/login`, data
    );
    
    return response.data;
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedin = false;
      state.token = '';
    }
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

export const { logout } = authSlice.actions;

export const selectIsLoggedin = (state: RootState) => state.auth.isLoggedin;
export const selectToken = (state: RootState) => state.auth.token;