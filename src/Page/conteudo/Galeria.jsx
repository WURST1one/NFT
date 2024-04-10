import React, { useState } from 'react';
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer/Footer";
import "../Style.css";

export function Galeria() {
  const [showAddImageForm, setShowAddImageForm] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [galeria, setGaleria] = useState([]);

  const handleAddButtonClick = () => {
    setShowAddImageForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Adicionando a nova imagem à galeria
    const novaImagem = { nome: imageName, url: imageUrl };
    setGaleria([...galeria, novaImagem]);
    // Limpando os campos do formulário
    setImageName('');
    setImageUrl('');
    // Escondendo o formulário
    setShowAddImageForm(false);
  };

  return (
    <div>
      <Header />

      <section className="Galery">
        <div className="circle">
          <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21130&authkey=%21AMlh7GwuzTuhBwg&width=175&height=175" alt="" />
          <p>ARTE DOS CRIADORES:</p>
        </div>
      </section>


      <section className="section-two">
        <div className="pok-container">
          
        <div className='art-piece'>
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21115&authkey=%21AOzYNBGO8cq4RqA&width=334&height=262" alt="" srcset="" />
            <p>VENONAT NFT</p>
            <div className='profile'>
              <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21128&authkey=%21AAgCfZgkbwAd37g&width=48&height=48" alt="" srcset="" />
              <p>Perfil</p>
            </div>
          </div>

          <div className='art-piece'>
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21113&authkey=%21AOiQBAQo3lKCS_s&width=334&height=262" alt="" srcset="" />
            <p>JACK ESQUELETO</p>
            <div className='profile'>
              <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21128&authkey=%21AAgCfZgkbwAd37g&width=48&height=48" alt="" srcset="" />
              <p>Perfil</p>
            </div>
          </div>

          <div className='art-piece'>
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21112&authkey=%21ALzY5bLmVceTGO8&width=334&height=262" alt="" srcset="" />
            <p>Bunny skeleton</p>
            <div className='profile'>
              <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21128&authkey=%21AAgCfZgkbwAd37g&width=48&height=48" alt="" srcset="" />
              <p>Perfil</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section-two">
        <div className="pok-container">
          {galeria.map((imagem, index) => (
            <div className="art-piece" key={index}>
              <img src={imagem.url} alt={imagem.nome} />
              <p>{imagem.nome}</p>
              <div className="profile">
                <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21128&authkey=%21AAgCfZgkbwAd37g&width=48&height=48" alt="" />
                <p>Perfil</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showAddImageForm && (
        <section className="add-image-form">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="imageName">Nome da Imagem:</label>
            <input
              type="text"
              id="imageName"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              
            />
            <label htmlFor="imageUrl">URL da Imagem:</label>
            <input 
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className='Input'
            />
            <button className='Upload' type="submit">Upload</button>
          </form>
        </section>
      )}
 
 <div className='button'>
      <button  onClick={handleAddButtonClick} id='Btn'>Adicionar</button>

      </div>
      <Footer />
    </div>
  );
}
