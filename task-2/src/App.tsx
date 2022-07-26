import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Modal from './components/Modal';

import './scss/app.scss';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [openedImage, setOpenedImage] = useState<string>('');

  // A "bridge" function between image from the list and modal with this image
  const onClickImage = (imgUrl: string) => {
    setOpenedImage(imgUrl);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Gallery onClickImage={onClickImage} />
      <Modal imgUrl={openedImage} isVisible={showModal} onCloseModal={() => setShowModal(false)} />
    </>
  );
};

export default App;
