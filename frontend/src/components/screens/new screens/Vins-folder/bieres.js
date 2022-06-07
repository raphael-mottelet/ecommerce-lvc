import React from 'react';
//import Reactu, { useState } from 'react';

import Navbar from '../../Navbar';
import Vinsnav from './vins-nav/vins-nav';
import CardItem from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';
import Footer from '../../footer-import/containers/footer';

import bi1 from './vins-img/biere/AltiplanoBiereAuKinoa-removebg-preview.png'
import bi2 from './vins-img/biere/BiereBioPurMaltBlondeSpeciale-removebg-preview.png'
import bi3 from './vins-img/biere/BiereFruitsDesBoisGrisetteBio-removebg-preview.png'
import bi4 from './vins-img/biere/BiereSansGLutenAmbréeSturmbeer-removebg-preview.png'
import bi5 from './vins-img/biere/DameBlancheBiereBlanhe-removebg-preview.png'

import bi6 from './vins-img/biere/FélibreeBiereBLonde-removebg-preview.png'
import bi7 from './vins-img/biere/GrisetteBioBiereBlanche-removebg-preview.png'
import bi8 from './vins-img/biere/GrisetteBioBiereBlonde-removebg-preview.png'
import bi9 from './vins-img/biere/IctisBiereBrune-removebg-preview.png'
import bi10 from './vins-img/biere/KermelitenSturmBIObiere-removebg-preview.png'

import bi11 from './vins-img/biere/MonetteBiereBrune-removebg-preview.png'
import bi12 from './vins-img/biere/MoulinDasqBiereBlonde-removebg-preview.png'
import bi13 from './vins-img/biere/NonneDeNoelBiereRousseEpicee-removebg-preview.png'
import bi14 from './vins-img/biere/StMartinBiereTriple-removebg-preview.png'
import bi15 from './vins-img/biere/ViaCruscisBiereAmbree-removebg-preview.png'

import bi16 from './vins-img/biere/AlietumBiereBlonde.png'
import bi17 from './vins-img/biere/EricioBiere.png'

export default function Bieres() {

  return (
    <>
    <Navbar/>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>
    <Vinsnav/>

<div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Autres</h2>
  <div className='cards__wrapper__vins__vins'>
    <ul className='cards__items__vins'>
      <CardItem
        src={bi1}
      text='ALTIPLANO BIERE AU KINOA 0,33cl'
        label='2,65€ En magasin'
      />
      <CardItem
        src={bi2}
        text='BIERE PUR MALT BLONDE SPECIALE'
        label='2,38€ En magasin'
      />
      <CardItem
        src={bi4}
        text='BIERE SANS GLUTEN AMBREE STURMBEER'
      label='4,90€ En magasin'
      />
      <CardItem
        src={bi5}
        text='DAME BLANCHE BIERE BLANCHE 0,33cl'
      label='2,45€ En magasin'
      />
      <CardItem
        src={bi6}
        text='FELIBREE BIERE BLONDE 0,33cl'
      label='2,39€ En magasin'
      />
      <CardItem
        src={bi3}
        text='GRISETTE BIERE FRUITS DES BOIS 25cl X4'
        label='9,35€ En magasin'
      />
      <CardItem
        src={bi7}
        text='GRISETTE BIO BIERE BLANCHE 25cl X4'
      label='6,65€ En magasin'
      />
      <CardItem
        src={bi8}
        text='GRISETTE BIO BIERE BLONDE 25cl X4'
      label='6,65€ En magasin'
      />

      <CardItem
        src={bi10}
        text='KERMELITEN STURM BIERE BLONDE 0,50cl'
      label='3,35€ En magasin'
      />
      <CardItem
        src={bi10}
        text='KERMELITEN STURM BIERE SANS GLUTEN 0,33cl'
      label='3,15€ En magasin'
      />
      <CardItem
        src={bi11}
        text='MONETTE BIERE 0,33cl'
      label='2,45€ En magasin'
      />
      <CardItem
        src={bi12}
        text="MOULIN D'ASQ 0,33cl"
      label='2,43€ En magasin'
      />
      <CardItem
        src={bi13}
        text='NONNE DE NOËL BIERE ROUSSE EPICEE 0,75cl'
      label='5,35€ En magasin'
      />
      <CardItem
        src={bi14}
        text='SAINT MARTIN BIERE TRIPLE 0,33cl'
      label='3,65€ En magasin'
      />
      <CardItem
        src={bi14}
        text='SAINT MARTIN BIERE BLONDE 0,33cl'
      label='3,35€ En magasin'
      />
      <CardItem
        src={bi15}
        text='VIA CRUSCIS BIERE AMBREE'
      label='4,90€ En magasin'
      />

      <CardItem
        src={bi17}
        text='ERICIO BIERE BRUNE 0,33cl'
      label='2,38€ En magasin'
      />
      <CardItem
        src={bi9}
        text='ICTIS BIERE BRUNE 0,33cl'
      label='2,30€ En magasin'
      />
            <CardItem
        src={bi16}
        text='ALIETUM BIERE BRUNE 0,33cl'
      label='2,55€ En magasin'
      />

      <CardItem
        src={bi17}
        text='ERICIO BIERE BRUNE 0,75cl'
      label='4,90€ En magasin'
      />
      <CardItem
        src={bi9}
        text='ICTIS BIERE BRUNE 0,75cl'
      label='4,65€ En magasin'
      />
      <CardItem
        src={bi16}
        text='ALIETUM BIERE BRUNE 0,75cl'
      label='5,10€ En magasin'
      />

    </ul>
  </div>

</div>
</div>
<Footer />
</>
  );
}
