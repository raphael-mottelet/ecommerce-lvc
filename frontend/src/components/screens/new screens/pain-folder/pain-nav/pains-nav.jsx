import React from 'react'
import { Link } from 'react-router-dom'
import './pains-nav.css'

export default function Painsnav (){
    return (
        <div className='pains-container'>
<nav className='pains-nav'>
    <ul className=''>
    <li className='pains-li'>
    <Link
        to='/Pains'
        className='pains-liens'
        >
        Levin
        </Link>
    </li>
    <li className='pains-li'>
    <Link
        to='/Pains'
        className='pains-liens'
        >
        Sans Gluten
        </Link>
    </li>
    <li className='pains-li'>
    <Link
        to='/Pains'
        className='pains-liens'
        >
        Baguettes
        </Link>
    </li>
    <li className='pains-li'>
    <Link
        to='/Pains'
        className='pains-liens'
        >
        Tranche
        </Link>
    </li>
    </ul>
</nav>
<div className='pains-numero-info'>
        <p>Commandez dès maintenant votre pain au :</p>
        <p>03 44 07 63 28</p>
        </div>
</div>
    )
}