import React from 'react';
import './Footer.css'; // Importe o arquivo de estilos

function Footer() {
  return (

    <section className='large'>
    <div className="container">
    <div className="top-content">
    <div className='Contact-Us'>
      <hr />
            <h2>Contact US</h2>
        </div>
    </div>
    <div className="bottom-content">
      <div className="left-content">
      <p>Trabalho React - SENAI</p>
            <p>Raissa Maciel Yope <br />
              Henrique Marchini
              </p>
      </div>
      <div className="right-content">
      <div className='Iconfy'>
            <a href="" target="_blank">
        <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21135&authkey=%21ALQ_bt2Rl0OREqQ&width=50&height=50" alt="Descrição da Imagem 1" />
      </a>
      <a href="https://www.exemplo2.com" target="_blank">
        <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21136&authkey=%21ACzx4PpU40HEcbA&width=42&height=42" alt="Descrição da Imagem 2" />
      </a>
      <a href="https://www.exemplo3.com" target="_blank">
        <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21137&authkey=%21AGbecPOS8UYSIrY&width=42&height=42" alt="Descrição da Imagem 3" />
      </a>
      </div>

      </div>
    </div>
  </div>
  </section>
  );
}

export default Footer;
