import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import { useState } from 'react';

// Importa aquí el resto de tus páginas cuando las crees
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Agrega aquí el resto de tus rutas cuando crees las páginas */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            
            {/* Puedes agregar una ruta para manejar páginas no encontradas */}
            <Route path="*" element={<div>Página no encontrada</div>} />
          </Routes>
        </main>
        {/* Aquí puedes agregar un Footer si lo deseas */}
      </div>
    </Router>
  );
}

export default App;
