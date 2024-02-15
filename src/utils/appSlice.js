import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    menuToggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeSidebar: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { menuToggle, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
