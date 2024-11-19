import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Theme from './Components/Theme';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PortFolio from './pages/PortFolio/PortFolio';
import Contact from './pages/Contact/Contact';

function App() {
  // App For Rendering
  return (
    <BrowserRouter>
      {/* Navigation Render */}
      <Navbar />
      {/* Theme Render */}
      <Theme />
      {/* Routes for different Pages */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='PortFolio' element={<PortFolio />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
