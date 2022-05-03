import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Teddy",
    email: "teddy@gmail.com",
  },
  {
    id: "2",
    name: "Atinder",
    email: "sanghera@gmail.com",
  },
];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    }
  }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;