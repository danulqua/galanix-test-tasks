import React from 'react';

type Props = {
  imgUrl: string;
  imgId: number;
  onClickImage: (e: React.MouseEvent<HTMLImageElement>) => void;
  onDeleteImage: (id: number) => void;
};

const GalleryItem: React.FC<Props> = ({ imgUrl, imgId, onClickImage, onDeleteImage }) => {
  return (
    <div className='gallery-item'>
      <img src={imgUrl} alt='img' onClick={onClickImage} />
      <button className='red' onClick={() => onDeleteImage(imgId)}>
        Delete
      </button>
    </div>
  );
};

export default GalleryItem;
