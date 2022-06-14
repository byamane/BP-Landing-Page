import './App.css';
import { useState } from 'react';

// Components
import Nav from './components/Nav';
import Landing from './pages/Landing';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Landing />
    </div>
  )
}

export default App;
