import { createSlice } from '@reduxjs/toolkit';

export const AllGenresTab = 'All genres';

const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState: {
    activeTab: AllGenresTab,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  }
});

const { actions, reducer } = activeTabSlice;

export const {
  setActiveTab
} = actions;

export default reducer;
