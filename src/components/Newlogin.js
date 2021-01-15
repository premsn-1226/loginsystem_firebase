import React from 'react'
import { Link } from 'react-router-dom'

export default function Newlogin() {
    return (
        <div>
            <h1>main home page</h1>
            <Link to="/signup">sign up</Link><br />
            <Link to="/login">Log in</Link>
        </div>
    )
}
