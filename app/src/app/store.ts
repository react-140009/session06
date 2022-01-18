import counterReducer from './../features/counter/counterSlice';
import todoReducer from './../features/todo/todoSlice';
import postReducer from './../features/post/postSlice';
import authReducer from './../features/auth/authSlice';
import categoryReducer from './../features/drug/categorySlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    post: postReducer,
    auth: authReducer,
    category: categoryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch