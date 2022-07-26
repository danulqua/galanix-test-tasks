import { Image } from '../data/images';
import { imagesData } from '../data/images';

export const loadFromLS = (): Image[] => {
  const data = window.localStorage.getItem('images');

  if (data) {
    const images = JSON.parse(data) as Image[];
    return images.length ? images : imagesData;
  }

  return imagesData;
};

export const saveToLS = (images: Image[]) => {
  window.localStorage.setItem('images', JSON.stringify(images));
};
