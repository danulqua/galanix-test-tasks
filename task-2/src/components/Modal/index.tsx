import React, { useRef } from 'react';
import './modal.scss';

type Props = {
  imgUrl: string;
  isVisible: boolean;
  onCloseModal: () => void;
};

const Modal: React.FC<Props> = ({ imgUrl, isVisible, onCloseModal }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  // If clicked outside the modal window - close modal
  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === imgRef.current) return;
    onCloseModal();
  };

  return (
    <div className={`overlay ${isVisible && 'visible'}`} onClick={onClickOverlay}>
      <div className='modal'>
        <img ref={imgRef} src={imgUrl} alt='img' />
        <button onClick={onCloseModal}>Close image</button>
      </div>
    </div>
  );
};

export default Modal;
