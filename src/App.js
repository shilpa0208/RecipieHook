import React from 'react'
import './generated/tailwind.css'
import DummyComponent from './DummyComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text-blue'>Welcome to Photo Gallery</p>
        <DummyComponent/>
      </header>
    </div>
  );
}

export default App;
