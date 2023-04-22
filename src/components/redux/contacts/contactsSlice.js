import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
} from './operations';

const notifyAdd = () => toast('Contact Add');
const notifyDelete = () => toast('Contact Delete');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
        notifyAdd();
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
        notifyDelete();
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1, payload);
      })
      .addCase(toggleCompleted.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
