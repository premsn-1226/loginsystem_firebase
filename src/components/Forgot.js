import React, { useRef, useState } from 'react'
import {Link } from 'react-router-dom'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
export default function Forgot() {
    const emailRef = useRef()
    const[loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const {Resetpassword} = useAuth()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setLoading(true)
            await Resetpassword(emailRef.current.value)
        }catch{
            setError('failed to change password')
        }
        setLoading(false)
    }
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Forgot password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                </Form.Group>
            <Button className="w-100" disabled={loading} type="submit">Reset password</Button>
            </Form>
            <div className="text-center w-100 mt-2">
              <Link to="/login">Log In</Link>
            </div>
            </Card.Body>
        </Card>
        <div className="text-center w-100 mt-2">
        Need an account?<Link to="/signup">Sign Up</Link>
        </div>
        </>
    )
}
