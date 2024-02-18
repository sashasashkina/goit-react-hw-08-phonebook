import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.requestFetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await api.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedPhone = number.toLowerCase();

      const duplicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentPhone = item.number.toLowerCase();
        return (
          normalizedCurrentName === normalizedName &&
          normalizedCurrentPhone === normalizedPhone
        );
      });
      if (duplicate) {
        alert(`${name} is already in contacts.`);
        return false;
      }
    },
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
