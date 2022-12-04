import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../constants';

export const AllGenresTab = 'All genres';

const activeTabSlice = createSlice({
  name: Namespace.ActiveTab,
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
