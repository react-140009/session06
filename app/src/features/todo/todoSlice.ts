import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoItem{
  id: number;
  title: string;
  done: boolean;
}
export interface TodoState {
  todoList: TodoItem[]
}

const initialState: TodoState = {
  todoList: [
    { id: 1, title: "task 1", done: true },
    { id: 2, title: "task 2", done: true },
    { id: 3, title: "task 3", done: false },
    { id: 4, title: "task 4", done: true },
  ]  
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const max = state.todoList.reduce((a, b) => (a > b.id ? a : b.id), -Infinity);
      state.todoList.push({id: max + 1, title: action.payload, done: false});
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(x => x.id !== action.payload)
    },
    toggle: (state, action: PayloadAction<number>) => {
      const todo = state.todoList.find((x) => x.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    }
    
  },
})

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;