import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../store';
import { toggleFavorite } from '../../store/universities/slice';
import { saveToLS } from '../../utilities/localStorage';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

import './universitiesTable.scss';

const UniversitiesTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { universities, favorites, status, searchValue } = useSelector((state: RootState) => state);

  // Favorites count value for different queries
  const favoritesCount = universities.reduce(
    (count, item) => (favorites.includes(item.name) ? count + 1 : count),
    0
  );

  // When successfully loading universities
  useEffect(() => {
    if (status === 'success' && universities.length) {
      saveToLS({ searchValue, universities, favorites });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [universities]);

  // When toggling favorites
  useEffect(() => {
    saveToLS({ searchValue, universities, favorites });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const onClickFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  // Render logic for correct output
  if (status === 'idle' && !universities.length) return <></>;
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <ErrorMessage text={`Error: couldn't send a request 😕`} />;
  if (status !== 'idle' && !universities.length)
    return <ErrorMessage text={`There are no universities with this name 😕`} />;

  return (
    <>
      <h2>Favorites count: {favoritesCount}</h2>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Country</th>
            <th>Name</th>
            <th>Link</th>
            <th>Add to favorites</th>
          </tr>
          {universities.map((item, index) => (
            <tr key={item.name}>
              <td>{index + 1}</td>
              <td>{item.alphaTwoCode}</td>
              <td>{item.country}</td>
              <td>{item.name}</td>
              <td>
                <a href={item.webPage} target='_blank' rel='noreferrer'>
                  {item.webPage}
                </a>
              </td>
              <td>
                <input
                  type='checkbox'
                  defaultChecked={favorites.includes(item.name)}
                  onChange={() => onClickFavorite(item.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UniversitiesTable;
