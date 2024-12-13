import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      // console.log(state);
      const data: any = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      // console.log(action);
      // console.log(state);
      const data = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      state.users = data;
    },
  },
});

export const { addUser, removeUser } = Slice.actions;

export default Slice.reducer;
