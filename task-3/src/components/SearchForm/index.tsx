import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchUniversities } from '../../store/universities/asyncActions';
import { resetUniversities } from '../../store/universities/slice';
import { clearLS } from '../../utilities/localStorage';

import './searchForm.scss';

type FormValues = {
  country: string;
};

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector((state: RootState) => state.searchValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.country.trim().toLowerCase() !== searchValue.trim().toLowerCase()) {
      dispatch(fetchUniversities(data.country.trim()));
    }
  };

  const onReset = () => {
    dispatch(resetUniversities());
    reset();
    clearLS();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <div className='input-wrapper'>
        <input
          type='text'
          placeholder='Enter country...'
          defaultValue={searchValue}
          {...register('country', { required: true })}
        />
        {errors.country && <span className='error'>Country is required!</span>}
      </div>
      <div className='button-group'>
        <button className='submit' disabled={errors.country && true}>
          Search
        </button>
        <button type='reset'>Reset</button>
      </div>
    </form>
  );
};

export default SearchForm;
