import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetContactsLoading: state => {
      state.isLoading = true;
    },
    fetchContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addContactsLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    addContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    addContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    deleteContactsLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    deleteContactsLSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    deleteContactsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactsLoading,
  deleteContactsLSuccess,
  deleteContactsError,
} = contactsSlice.actions;
export default contactsSlice.reducer;
