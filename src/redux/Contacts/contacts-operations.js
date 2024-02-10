import * as api from '../../api/api';

import {
  fetContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactsLoading,
  deleteContactsLSuccess,
  deleteContactsError,
} from './contacts-slice';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetContactsLoading());
      const data = await api.requestFetchContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};
export const addContacts = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactsLoading());
      const data = await api.requestAddContacts(body);
      dispatch(addContactsSuccess(data));
    } catch (error) {
      dispatch(addContactsError(error.message));
    }
  };
  return func;
};
export const deleteContacts = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactsLoading());
      await api.requestDeleteContacts(id);
      dispatch(deleteContactsLSuccess(id));
    } catch (error) {
      dispatch(deleteContactsError(error.message));
    }
  };
  return func;
};
