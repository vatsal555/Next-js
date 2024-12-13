import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid,
} from "@reduxjs/toolkit";

const initialState = {
  userAPIData: [],
  // users: JSON.parse(localStorage.getItem("users")),
  users: JSON.parse(localStorage.getItem("users")) || [],
  // users: [],
};

export const fetchApiUser = createAsyncThunk("fetchApiUser", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(result);

  return result.json();
});

const Slice = createSlice({
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
      localStorage.setItem("users", JSON.stringify(current(state.users)));
      // console.log(current(state.users));
    },
    removeUser: (state, action) => {
      // console.log(action);
      // console.log(state);
      const data = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      state.users = data;
      localStorage.removeItem("users");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUser.fulfilled, (state, action) => {
      console.log("reducer", action);
      (state.isloading = false), (state.userAPIData = action.payload);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;

export default Slice.reducer;
