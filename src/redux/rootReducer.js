import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import contactsReducer from './Contacts/contacts-slice';
import filterReducer from './Filter/filter-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
