import './App.css';
import { NavbarSimple } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Checkout from './pages/checkout';
import About from './pages/about';

export type Dog = {
  id: string;
  image: string;
  title: string;
  description: string;
}

export type CartDog = {
  id: string;
  title: string;
  description: string;
}

function App() {
  return (
    <>
    <NavbarSimple/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
