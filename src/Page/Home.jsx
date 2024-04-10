// Home.jsx

import React from 'react';
import Header from '../Componentes/Header';
import Banner from '../Componentes/Banner'
import Footer from '../Componentes/Footer/Footer';
import './Style.css'

export function Home() {
    return (
        <div>
            <Header />
          

            <Banner />

            <Footer />
        </div>
    );
}
