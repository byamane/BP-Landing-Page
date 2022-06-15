import './App.css';
import { useState } from 'react';

// Components
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Header from './components/Header/Header';
import Donate from './components/Donate/Donate'
import Footer from './components/Footer/Footer';

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
      <Donate />
      <About />
      <Footer />
    </div>
  )
}

export default App;
