import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetContactsLoading());
//       const data = await api.requestFetchContacts();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsError(error.message));
//     }
//   };
//   return func;
// };

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
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedPhone = phone.toLowerCase();

      const duplicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentPhone = item.phone.toLowerCase();
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
// export const addContacts = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactsLoading());
//       const data = await api.requestAddContacts(body);
//       dispatch(addContactsSuccess(data));
//     } catch (error) {
//       dispatch(addContactsError(error.message));
//     }
//   };
//   return func;
// };
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
// export const deleteContacts = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(deleteContactsLoading());
//       await api.requestDeleteContacts(id);
//       dispatch(deleteContactsLSuccess(id));
//     } catch (error) {
//       dispatch(deleteContactsError(error.message));
//     }
//   };
//   return func;
// };
