import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreMiPage from './pages/SobreMiPage';
import ProyectoDetalle from './pages/ProyectoDetalle';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
