import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './inicio';
import DetallesTareas from './detallesTarea';
import CrearTareas from './CrearTareas';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tarea/:id" element={<DetallesTareas />} />
        <Route path="/crear" element={<CrearTareas />} />
      </Routes>
    </Router>
  );
}

export default App;
