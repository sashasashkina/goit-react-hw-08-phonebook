import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default persistReducer;
