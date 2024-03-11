import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeToFavorite: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToFavorite, removeToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
