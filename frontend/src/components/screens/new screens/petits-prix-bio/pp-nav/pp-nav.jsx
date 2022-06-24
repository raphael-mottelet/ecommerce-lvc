import React from 'react'
import { Link } from 'react-router-dom'
import './pp-nav.css'

export default function PPnav (){
    return (
        <div className='pp-nav-container'>
<nav className='pp-nav'>
    <ul className='nav-container'>
    <li className='pp-li'>
    <Link
        to='/petitprix'
        className='pp-liens'
        >
        Epicerie
        </Link>
    </li>
    <li className='pp-li'>
    <Link
        to='/ppcosmetique'
        className='pp-liens'
        >
        Entretient et Bien-etre
        </Link>
    </li>
    <li className='pp-li'>
    <Link
        tp='/ppcosmetique'
        className='pp-liens-mois'
        >
        Promo du mois
        </Link>
    </li>
    </ul>
</nav>
<div className='pp-numero-info'>
        <p>Commandez dès maintenant vos produits en réduction au :</p>
        <p>03 44 07 63 28</p>
        </div>
</div>
    )
}