import { University } from '../services/universities.service';

type LocalStorageData = {
  searchValue: string;
  universities: University[];
  favorites: string[];
};

export const loadFromLS = (): LocalStorageData => {
  const data = window.localStorage.getItem('universities');

  if (data) {
    const obj = JSON.parse(data) as LocalStorageData;
    return obj;
  }

  return { searchValue: '', universities: [], favorites: [] };
};

export const saveToLS = (data: LocalStorageData) => {
  window.localStorage.setItem('universities', JSON.stringify(data));
};

export const clearLS = () => {
  const data = loadFromLS();
  window.localStorage.setItem(
    'universities',
    JSON.stringify({ ...data, searchValue: '', universities: [] })
  );
};
