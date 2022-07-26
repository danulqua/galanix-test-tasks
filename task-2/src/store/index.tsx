import { configureStore } from '@reduxjs/toolkit';
import images from './imagesSlice';

const store = configureStore({
  reducer: images
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
