import React from 'react';
import TShirtDisplay from './Components/TShirtDisplay';
import Second from './Components/Second';
import Fourth from './Components/Fourth';

 // Assuming Apps component is in a file named Apps.js within Components directory

function App() {
  return (
    <div className="App">
      <TShirtDisplay />
      <Second />
      <Fourth />
    </div>
  );
}

export default App;
