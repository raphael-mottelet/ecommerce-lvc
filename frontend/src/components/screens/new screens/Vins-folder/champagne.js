import React from 'react';
//import Reactu, { useState } from 'react';

import Vinsnav from './vins-nav/vins-nav'
import CardItemVins from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';

import c1 from './vins-img/champagne/bullesrougesdemadone.png';
import c2 from './vins-img/champagne/clairetteorigine.png';
import c3 from './vins-img/champagne/drapierlarevallis.png';
import c4 from './vins-img/champagne/drapierrose.png';
import c5 from './vins-img/champagne/drapiersanssouffre.png';
import c6 from './vins-img/champagne/drappierbrutNat.png';
import c7 from './vins-img/champagne/erickshreiber.png';
import c8 from './vins-img/champagne/erickshreibertradition.png';
import c9 from './vins-img/champagne/prossecobrut.png';
import c10 from './vins-img/champagne/vincentbliard.png';

export default function Champagne() {

  return (
    <>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>
    <Vinsnav/>

    <div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Champagnes</h2>
  <div className='cards__wrapper__vins'>
    <ul className='cards__items__vins'>
      <CardItemVins
        src={c1}
        text='BULLE ROUGE DE MADONE 0,75'
        label='13,50€ En magasin'
      />
      <CardItemVins
        src={c2}
        text='CLAIRETTE ORIGINE 0,75'
        label='Indisponible'
      />
      <CardItemVins
        src={c3}
        text='CHAMPAGNE BIO CLAIREVALIS DRAPPIER 0,75'
        label='41,85€ En magasin'
      />
      <CardItemVins
        src={c4}
        text='CHAMPAGNE ROSE NATURE DRAPPIER 0,75'
        label='39,40€ En magasin'
      />
      <CardItemVins
        src={c5}
        text='CHAMPAGNE SANS SOUFRE DRAPPIER 0,75'
        label='41,15€ En magasin'
      />
      <CardItemVins
        src={c6}
        text='CHAMPAGNE BRUT NATURE DRAPPIER 0,75'
        label='33,75€ En magasin'
      />
      <CardItemVins
        src={c7}
        text='CHAMPAGNE GRANDE RESERVE ERICK SHREIBER 0,75'
        label='29,75€ En magasin'
      />
      <CardItemVins
        src={c8}
        text='CHAMPAGNE BRUT TRADIT ERICK SHREIBER 0,575'
        label='21,69€ En magasin'
      />
      <CardItemVins
        src={c9}
        text='AOP PROSECCO BRUT 0,75'
        label='Indisponible'
      />
      <CardItemVins
        src={c10}
        text='CHAMPAGNE VINCENT BLIARD 0,75'
        label='26,50€ En magasin'
      />
    </ul>
  </div>
</div>
</div>
</>
  );
}