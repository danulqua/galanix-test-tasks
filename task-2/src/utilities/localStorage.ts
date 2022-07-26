import { Image } from '../data/images';
import { imagesData } from '../data/images';

// Loading images from local storage
export const loadFromLS = (): Image[] => {
  const data = window.localStorage.getItem('images');

  if (data) {
    const images = JSON.parse(data) as Image[];

    // if there local storage didn't have any images - return initial data
    return images.length ? images : imagesData;
  }

  return imagesData;
};

// saving images to local storage
export const saveToLS = (images: Image[]) => {
  window.localStorage.setItem('images', JSON.stringify(images));
};
