import './App.css';
import { useState } from 'react';

// Components
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Header from './components/Header';

function App() {
  
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <Nav />
      <Header
        form={form}
        setForm={setForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Landing />
    </div>
  )
}

export default App;
