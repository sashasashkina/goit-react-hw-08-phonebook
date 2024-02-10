import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './Contacts/contacts-slice';
import filterReducer from './Filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
