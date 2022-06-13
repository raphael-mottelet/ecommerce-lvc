import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../loader'
import Message from '../Message'
import FormContainer from '../FormContainer'
import './Register.css'

import { register } from '../../actions/userActions'

function RegisterScreen({location, history}) {

    const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [message, setMessage] = useState('')


    
        const dispatch = useDispatch()
    
    //on split redirect, et si on a rien on reste sur un / vide pour revenir à la racine.
        const redirect = location.search ? location.search.split('=')[1] : '/'
    
        const userRegister = useSelector(state => state.userRegister)
        //on destructure la donnée
        const {error, loeading, userInfo} = userRegister
    
        // avec usEffect, si userinfo existe (si user est connecté), alors on redirige user vers la page dans redirect
        useEffect(() => {
            if (userInfo) {
                history.push(redirect)
            }
        }, [history, userInfo, redirect])
    
        const submitHandler = (e) => {
            e.preventDefault()
            if(password != confirmPassword) {
                setMessage('Les mots de passes doivent etre identiques')
            }else {
                dispatch(register(name, email, password))
                //console.log('envoyé')
            }
        }
  return (
      <div className='registercontainer'>
      <FormContainer>
            <h1>S'enregistrer</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loeading && <Loader/>}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>
                        Nom
                    </Form.Label>
                    <Form.Control
                    required
                    type='name'
                    placeholder='Nom'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control
                    required
                    type='email'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>
                        Mot de passe
                    </Form.Label>
                    <Form.Control
                    required
                    type='password'
                    placeholder='mot de passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>
                        Confirmer Mot de passe
                    </Form.Label>
                    <Form.Control
                    required
                    type='password'
                    placeholder='mot de passe'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                </Form.Group>
                
                <Button type='submit' variant='primary'>
                    S'inscrire'
                </Button>

            </Form>

            <Row className='py-3'>
        <Col>
        Déja inscrit ? <Link //on crée un redirect, si on a une redirection on envoi l'user sur s'enregistrer, 
        //avec la valeur de ce que l'on passe, si on a pas de redirect reste sur la page d'neregistrement sans parametres suplémentaires
        to={redirect ? `/login?redirect=${redirect}` : '/login'}
        >Se Connecter</Link>
        </Col>
            </Row>

      </FormContainer>
      </div>
  )
}

export default RegisterScreen