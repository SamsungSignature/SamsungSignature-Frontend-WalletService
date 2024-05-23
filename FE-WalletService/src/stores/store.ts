import {configureStore} from '@reduxjs/toolkit';
import addCard from './slices/addCard';
import example from './slices/example';
import user from './slices/user';

const reducer = {
  addCard,
  example,
  user,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
