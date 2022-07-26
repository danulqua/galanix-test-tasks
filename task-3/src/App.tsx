import React from 'react';
import SearchForm from './components/SearchForm';
import UniversitiesTable from './components/UniversitiesTable';
import './scss/main.scss';

const App: React.FC = () => {
  return (
    <div className='app'>
      <div className='container'>
        <h1>Universities Parser 🎓</h1>
        <SearchForm />
        <UniversitiesTable />
      </div>
    </div>
  );
};

export default App;
