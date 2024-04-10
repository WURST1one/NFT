import React from 'react';
import './Banner.css';
import Icon from '../img/Banner.png';

function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="text">
          <p>Descubra, encontre e selecione NFTs extraordinárias de bichinhos.</p>
        </div>
        <div className="animated-img">
          <img src={Icon} alt="" srcSet="" />
        </div>
      </section>

      <section className='section-two'>
        <p className="Lively">Lives actions</p>
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



      <section className='Top'>
        <div className='Create'>
          <h3>Top Criadores</h3>
        </div>
        <section className='Top-breeders'>
          <div className="circle">
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21132&authkey=%21AKk4LzJgUhehf2c&width=175&height=175" alt="" />
          </div>
          <div className="circle">
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21133&authkey=%21AJYTDt7cEPYfBic&width=175&height=175" alt="" />
          </div>
          <div className="circle">
            <img src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21130&authkey=%21AMlh7GwuzTuhBwg&width=175&height=175" alt="" />
          </div>
        
        </section>
      </section>
    </div>
  );
}

export default Banner;
