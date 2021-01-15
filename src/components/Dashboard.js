import React, { useState } from 'react'
import { Button, Card,Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {useAuth } from '../contexts/AuthContext'
export default function Newlogin() {
    const[error,setError] = useState('')
    const {currentUser ,Logout}  = useAuth()
    const history = useHistory()
    async function handleLogout(){
        setError('')
        try{
            setError('')
            await Logout()
            history.push('/login')
        }catch{
            setError("Failed to log out")
        }
    }
    

    return (
      <>
      <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <h5 className="text-center mb-4"><strong>Email : </strong><i>{currentUser.email}</i></h5>
            <div className="w-100 text-center mt-2">
                <Button>Update Profile</Button>
            </div>
            <div className="w-100 text-center mt-2">
                <Button variant="danger" onClick={handleLogout}>Log Out</Button>
            </div>
        </Card.Body>
      </Card>
     
      </>
    )
}
