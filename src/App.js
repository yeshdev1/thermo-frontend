import './App.css';
import NavBarComponent from './Components/NavBarComponent';
import PageContent from './PageContent/PageContent';
import React from 'react';
import { LANDING_PAGE } from './Strings/strings';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(LANDING_PAGE)
  return (
    <div>
      <NavBarComponent setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
