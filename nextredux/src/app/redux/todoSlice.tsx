import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);

      const data: {} = {
        id: nanoid(),
        name: action.payload,
      };
      state.todos.push(data);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
