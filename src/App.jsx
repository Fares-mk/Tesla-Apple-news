import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/nav&footer/Navbar"; 
import Footer from './components/nav&footer/footer';
import Apple from './components/pagess/Apple';
import Tesla from './components/pagess/Tesla';
import Weather from './components/pagess/Weather';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
      <Route path='Apple' element={<Apple />} />
      <Route path='Tesla' element={<Tesla />} />
      <Route path='Weather' element={<Weather />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;