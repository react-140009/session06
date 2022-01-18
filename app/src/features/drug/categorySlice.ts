import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../app/api';
import { RootState } from '../../app/store';


export interface CategoryModel {
  id: number;
  name: string;
  persianName: string;
}

export interface CategoryState {
  data: CategoryModel[];
  loading: boolean;
}

const initialState : CategoryState = {
  data: [],
  loading: false,
}

export const fetchCategoryAsync = createAsyncThunk(
  'category/fetch',
  async () => {    
    return (await api.get<CategoryModel[]>(
      `/categories`,        
    )).data;
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {        
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategoryAsync.rejected, (state, action) => {
      state.loading = false;
      state.data = [];      
    });
  }

})

export default categorySlice.reducer;

export const selectCategoryData = (state: RootState) => state.category.data;