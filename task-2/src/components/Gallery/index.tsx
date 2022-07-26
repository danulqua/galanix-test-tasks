import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesData } from '../../data/images';
import { RootState } from '../../store';
import { setImages } from '../../store/imagesSlice';
import { saveToLS } from '../../utilities/localStorage';

import GalleryItem from './GalleryItem';

import './gallery.scss';

type Props = {
  onClickImage: (imgUrl: string) => void;
};

const Gallery: React.FC<Props> = ({ onClickImage }) => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.images);

  // Pass image url to the modal window
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    onClickImage(e.currentTarget.src);
  };

  // Delete image from the list
  const onDeleteImage = (id: number) => {
    const newImages = images.filter((item) => item.id !== id);
    dispatch(setImages(newImages));
    saveToLS(newImages);
  };

  // Reset list with initial images data
  const onResetGallery = () => {
    dispatch(setImages(imagesData));
    saveToLS(imagesData);
  };

  return (
    <>
      <div className='gallery'>
        {images.map((item) => (
          <GalleryItem
            key={item.id}
            imgUrl={item.imgUrl}
            imgId={item.id}
            onClickImage={handleClick}
            onDeleteImage={onDeleteImage}
          />
        ))}
      </div>
      <button className='reset' onClick={onResetGallery}>
        Reset
      </button>
    </>
  );
};

export default Gallery;
