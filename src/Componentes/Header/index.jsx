// Importações necessárias do React e React Router
import React from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom'

// Componente Header
function Header() {
    const img = 'https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21114&authkey=%21ALaUzewTEWqZq0Q&width=50&height=50';

    const location = useLocation();

    // Função para verificar se a rota atual corresponde à rota fornecida
    const isCurrentRoute = (route) => {
      return location.pathname === route;
    }

    
    return (

      <>
        <header className="header">
          <section className='LOGOTYPE'>
            <div className="logo">
              <img src={img} alt="" className="img-fluid" />
              <div className='NFTIFY'>
                <p className="h1">NFTIFY</p>
              </div>
            </div>
          </section>
          <section className='nav-bar'>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                    <li className="nav-item">

                      {/* Menu */}
                      <Link to="/" className={isCurrentRoute("/") ? "active" : ""}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Login" className={isCurrentRoute("/Login") ? "active" : ""}>Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Arte" className={isCurrentRoute("/Arte") ? "active" : ""}>Arte</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Sobre" className={isCurrentRoute("/Sobre") ? "active" : ""}>Sobre</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Galeria" className={isCurrentRoute("/Galeria") ? "active" : ""}>Galeria</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </section>
        </header>
      </>
    );
  }

export default Header;
