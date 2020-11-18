// libraies
import React from 'react';

// components
import { Header, Searcher, Table } from './components';

function App() {
  return (
    <div className="d-flex align-items-center flex-column">
      <Header />
      <div className="d-flex align-items-center flex-column py-2">
        <Searcher />
        <Table />
      </div>
    </div>
  );
}

export default App;
