import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getDate } from '../../utilities/getDate';

import './header.scss';

const Header: React.FC = () => {
  const [date, setDate] = useState<string>(getDate());
  const imagesCount = useSelector((state: RootState) => state.images.length);

  // Every 1 second update time. Even though it doesn't have seconds
  // it's important because if you reload page when your local time
  // is **:59 and setInterval set to 60000 - it will update time after delay
  useEffect(() => {
    setInterval(() => setDate(getDate()), 1000);
  });

  return (
    <header>
      <div className='images-count'>Visible images: {imagesCount}</div>
      <div className='date'>{date}</div>
    </header>
  );
};

export default Header;
