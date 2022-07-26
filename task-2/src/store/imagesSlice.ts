import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../data/images';
import { loadFromLS } from '../utilities/localStorage';

const initialState = {
  images: loadFromLS()
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    deleteImage(state, action: PayloadAction<number>) {
      state.images = state.images.filter((item) => item.id !== action.payload);
    },
    setImages(state, action: PayloadAction<Image[]>) {
      state.images = action.payload;
    }
  }
});

export const { deleteImage, setImages } = imagesSlice.actions;

export default imagesSlice.reducer;
