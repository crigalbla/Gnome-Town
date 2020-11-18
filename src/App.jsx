import React from 'react';
import { Button } from 'react-bootstrap';

fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return (
    <div className="d-flex justify-content-center py-2">
      <header>
        <p>
          Hello Brastlewark town.
        </p>
        <Button>example</Button>
      </header>
    </div>
  );
}

export default App;
