import { University } from '../services/universities.service';

type LocalStorageData = {
  searchValue: string;
  universities: University[];
  favorites: string[];
};

// Load data from local storage
export const loadFromLS = (): LocalStorageData => {
  const data = window.localStorage.getItem('universities');

  if (data) {
    const obj = JSON.parse(data) as LocalStorageData;
    return obj;
  }

  return { searchValue: '', universities: [], favorites: [] };
};

// Save data to local storage
export const saveToLS = (data: LocalStorageData) => {
  window.localStorage.setItem('universities', JSON.stringify(data));
};

// Clear data in local storage except favorite universities
export const clearLS = () => {
  const data = loadFromLS();
  window.localStorage.setItem(
    'universities',
    JSON.stringify({ ...data, searchValue: '', universities: [] })
  );
};
