import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from 'shared/functions/redux';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operations';

// const pending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const rejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContacts.pending, pending)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContacts.rejected, rejected)
      .addCase(deleteContacts.pending, pending)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContacts.rejected, rejected);
  },
});

export default contactsSlice.reducer;
