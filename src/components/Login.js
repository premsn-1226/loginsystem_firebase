import React, { useRef, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const{Login} = useAuth()
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setLoading(true)
            await Login(emailRef.current.value,passwordRef.current.value)
            history.push('/dashboard')
        }catch{
            setError('failed to Log In')
        }
        setLoading(false)
    }
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
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
            <Button className="w-100" disabled={loading} type="submit">Log In</Button>
            </Form>
            <div className="text-center w-100 mt-2">
                <Link to="/forgot-password">Forgot Password</Link>
            </div>
            </Card.Body>
        </Card>
        <div className="text-center w-100 mt-2">
        Need an account?<Link to="/signup"> Sign Up</Link>
        </div>
        </>
    )
}
