import React,{useRef, useState} from 'react'
import {Form,Card,Button,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {SignUp} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()

   async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('password do not match')
        }
        try{
            setLoading(true)
            await SignUp(emailRef.current.value,passwordRef.current.value)
            history.push('/dashboard')
        }catch{
            setError('Account already Exist')
        }
      setLoading(false)
    }
    return (
        <>
         <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button className="w-100" disabled={loading} type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card> 
        <div className="w-100 text-center mt-2">
        Already have an account?<Link to="/login"> log in</Link>
        </div>  
        </>
    )
}
