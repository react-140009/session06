import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../../app/store';

function Test(){

}
Test.xyz = 123;
Test.abc = function(){}

Test();
Test.abc()


export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  postList: PostItem[];
  loading: boolean;
  page: number;
  total: number;
}

const initialState : PostState = {
  postList: [],
  loading: false,
  page: 1,
  total: 0
}

export const fetchPageAsync = createAsyncThunk(
  'post/fetchPage',
  async (page: number, thunkApi) => {
    /**
     * promise() 
     *  pending: dar entezar
     *  resolve: fulfilled
     *  fail:    rejected
     */    
    const token = (thunkApi.getState() as RootState).auth.token
    return {
      response: await axios.get<PostItem[]>(
        `http://localhost:3010/posts?_page=${page}&_limit=10`,
        {headers: {'token': token}}
      ),
      page
    };
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {        
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPageAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPageAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.postList = action.payload.response.data;
      state.total = +action.payload.response.headers["x-total-count"]
      state.page = action.payload.page
    });
    builder.addCase(fetchPageAsync.rejected, (state, action) => {
      state.loading = false;
      state.postList = [];      
    });
  }

})

export default postSlice.reducer;