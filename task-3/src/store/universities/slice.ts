import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { University } from '../../services/universities.service';
import { loadFromLS } from '../../utilities/localStorage';
import { fetchUniversities } from './asyncActions';

interface InitialState {
  universities: University[];
  favorites: string[];
  status: string;
  searchValue: string;
}

const lsData = loadFromLS();

const initialState: InitialState = {
  status: 'idle',
  universities: lsData.universities,
  favorites: lsData.favorites,
  searchValue: lsData.searchValue
};

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    resetUniversities(state) {
      state.status = 'idle';
      state.universities = [];
      state.searchValue = '';
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      const universityName = state.favorites.find((name) => name === action.payload);

      if (universityName) {
        state.favorites = state.favorites.filter((name) => name !== universityName);
      } else {
        state.favorites.push(action.payload);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.status = 'loading';
        state.universities = [];
        state.searchValue = '';
      })
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.status = 'success';
        state.searchValue = action.payload.searchValue;
        state.universities = action.payload.universities;
      })
      .addCase(fetchUniversities.rejected, (state) => {
        state.status = 'error';
        state.universities = [];
        state.searchValue = '';
      });
  }
});

export const { resetUniversities, toggleFavorite } = universitiesSlice.actions;

export default universitiesSlice.reducer;
