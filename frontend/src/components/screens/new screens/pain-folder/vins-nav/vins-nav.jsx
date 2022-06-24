import React from 'react'
import { Link } from 'react-router-dom'
import './vins-nav.css'

export default function Vinsnav (){
    return (
        <div className='vins-container'>
<nav className='vins-nav'>
    <ul className=''>
    <li className='vins-li'>
    <Link
        to='/vinrouge'
        className='vins-liens'
        >
        Vins Rouges
        </Link>
    </li>
    <li className='vins-li'>
    <Link
        to='/vinblanc'
        className='vins-liens'
        >
        Vins Blancs
        </Link>
    </li>
    <li className='vins-li'>
    <Link
        to='/vinrose'
        className='vins-liens'
        >
        Vins Rosés
        </Link>
    </li>
    <li className='vins-li'>
    <Link
        to='/champagne'
        className='vins-liens'
        >
        Champagnes
        </Link>
    </li>
    <li className='vins-li'>
    <Link
        to='/bieres'
        className='vins-liens'
        >
        Bières
        </Link>

    </li>
    <li className='vins-li'>
    <Link
        to='/autresvins'
        className='vins-liens'
        >
        Autres Vins
        </Link>

    </li>
    </ul>
</nav>
<div className='vins-numero-info'>
        <p>Commandez dès maintenant votre vin au :</p>
        <p>03 44 07 63 28</p>
        </div>
</div>
    )
}