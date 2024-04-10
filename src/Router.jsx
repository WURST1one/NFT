import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Login } from "./Page/conteudo/Login";
import { Arte } from "./Page/conteudo/Arte";
import { Sobre } from "./Page/conteudo/Sobre";
import { Galeria } from "./Page/conteudo/Galeria";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas */}
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Arte" element={<Arte />} /> 
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Galeria" element={<Galeria />} />
            </Routes>
            <Body />
        </BrowserRouter>
    );
}

export default App;
