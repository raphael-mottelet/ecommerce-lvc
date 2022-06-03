import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>A propos</Footer.Title>
                    <Footer.Link href="https://www.lavieclaire.com/mentions-legales/">CGU</Footer.Link>
                    <Footer.Link href="https://www.lavieclaire.com/recettes/">Recettes gourmandes La Vie Claire</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/cafet">Cafeteria</Footer.Link>
                    <Footer.Link href="/Paniersdemae">Les paniers de Mae</Footer.Link>
                    <Footer.Link href="/cafet"></Footer.Link>
                    <Footer.Link href="/services"></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Nous contacter</Footer.Title>
                    <Footer.Link href="/contact">nous joindre</Footer.Link>
                    <Footer.Link href="/contact"></Footer.Link>
                    <Footer.Link href="/contact"></Footer.Link>
                    <Footer.Link href="/contact"></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Réseaux sociaux</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/LaVieClaire/?hc_ref=ARS4gw9Iv7NkDJFQrWBpsHaoAHaCVEml2vScBCgPvZtXrJ2p2CG3TfsyzlriY-X-CDI&fref=nf&__tn__=kC-R"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/user/lavieclaireofficiel"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/_LaVieClaire"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}