import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import universities from './universities/slice';

const store = configureStore({
  reducer: universities
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
