import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../loader'
import Message from '../Message'
import FormContainer from '../FormContainer'

import { login } from '../../actions/userActions'
import './Login.css'

function LoginScreen({location,history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

//on split redirect, et si on a rien on reste sur un / vide pour revenir à la racine.
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    //on destructure la donnée
    const {error, loeading, userInfo} = userLogin

    // avec usEffect, si userinfo existe (si user est connecté), alors on redirige user vers la page dans redirect
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        //console.log('envoyé')
    }
    
//on implemente les differentes zones de saisie pour le formulaire
  return (
<div className='csslogin'>
<FormContainer>
    <h1>Se connecter</h1>
    {error && <Message variant='danger'>{error}</Message>}
    {loeading && <Loader/>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>
                Adresse Email
            </Form.Label>
                <Form.Control
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>
                Mot de passe
            </Form.Label>
                <Form.Control
                type='password'
                placeholder='mot de passe'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
            se connecter
        </Button>
    </Form>
    <Row className='py-3'>
        <Col>
        Nouveau Client ? <Link //on crée un redirect, si on a une redirection on envoi l'user sur s'enregistrer, 
        //avec la valeur de ce que l'on passe, si on a pas de redirect reste sur la page d'neregistrement sans parametres suplémentaires
        to={redirect ? `/register?redirect=${redirect}` : '/register'}
        >S'inscrire</Link>
        </Col>
    </Row>
</FormContainer>
</div>
  )
}

export default LoginScreen
