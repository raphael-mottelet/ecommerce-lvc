import React from 'react';
//import Reactu, { useState } from 'react';

import Navbar from '../../Navbar';
import Vinsnav from './vins-nav/vins-nav';
import CardItemVins from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';
import Footer from '../../footer-import/containers/footer';

import rose1 from './vins-img/rosé/CDPr.png';
import rose2 from './vins-img/rosé/echappeebelle.png';
import rose3 from './vins-img/rosé/empruntesgrisdetoulCDTl.png';
import rose4 from './vins-img/rosé/lamourette.png';
import rose5 from './vins-img/rosé/lelievreCDTl.png';
import rose6 from './vins-img/rosé/masdecadenetCDPr.png';
import rose7 from './vins-img/rosé/oscar.png';
import rose8 from './vins-img/rosé/syrahrosé.png';

export default function VinRose() {

    return (
    <>
    <Navbar/>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>
    <Vinsnav/>

<div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Vins Rosés</h2>
<div className='cards__wrapper__vins'>
    <ul className='cards__items__vins'>
    <CardItemVins
        src={rose1}
        text='AOP COTES DE PROVENCE ROSE 0,75'
        label='11,49€ En magasin'
    />
    <CardItemVins
        src={rose2}
        text='ECHAPPEE BELLE 0,75 :  375'
        label='10,40€ En magasin'
    />
    <CardItemVins
        src={rose3}
        text='GRIS DE TOUL 2019 - AOC COTES DE TOUL 0,75'
        label='En magasin'
    />
    <CardItemVins
        src={rose3}
        text='GRIS DE TOUL EMPREINTES AOC COTES DE TOUL 0,375'
        label='6,20€ En magasin'
    />
    <CardItemVins
        src={rose5}
        text='GRIS DE PIQUE NIQUE - AOC COTES DE TOUL 0,75'
        label='9,85€ En magasin'
    />
    <CardItemVins
        src={rose6}
        text='UBY BIO N26 VIN ROSE COTE GASCOGNE 0,75'
        label='6,80€ En magasin'
    />
    <CardItemVins
        src={rose7}
        text='OSCAR IGP OC ROSE 0,75'
        label='8,55€ En magasin'
    />
    <CardItemVins
        src={rose8}
        text='VIN DE FRANCE SYRHA ROSE 0,75'
        label='5,59€ En magasin'
    />
    <CardItemVins
        src={rose3}
        text='GRIS DE PIQUE NIQUE - AOC COTES DE TOUL 0,75'
        label='En magasin'
    />
    <CardItemVins
        src={rose4}
        text='IGP OC MARQUETTE GRENACHE ROSE LA MAROUETTE 0,75'
        label='6,15€ En magasin'
    />
    </ul>
</div>

</div>
</div>
<Footer />
</>
);
}
