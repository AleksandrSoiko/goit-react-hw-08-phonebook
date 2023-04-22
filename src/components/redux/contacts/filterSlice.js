import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    change(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
