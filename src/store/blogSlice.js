import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
