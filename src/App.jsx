import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Renomeei para BrowserRouter e importei Routes
import './App.css';
import { Home } from './Page/Home';
import { Login } from './Page/conteudo/Login';
import { Sobre } from './Page/conteudo/Sobre';
import { Arte } from './Page/conteudo/Arte';
import { Galeria } from './Page/conteudo/Galeria';


function App() {
  return (
    <Router> {}
      <Routes> {}
      <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} /> {}
        <Route path='/Arte' element={<Arte  />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Galeria' element={<Galeria />} />
      </Routes>
    </Router>
  );
}

export default App;
