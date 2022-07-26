import { createAsyncThunk } from '@reduxjs/toolkit';
import uniService from '../../services/universities.service';

export const fetchUniversities = createAsyncThunk(
  'universities/fetchUniversitiesStatus',
  async (searchValue: string) => {
    const data = await uniService.getUniversitiesByCountry(searchValue);
    return { universities: data, searchValue };
  }
);
