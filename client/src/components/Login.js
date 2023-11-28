import React, {useState, useContext} from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { UserContext } from '../contexts/UserContext'
import '../index.css'
import Button from '../styles/Button'

function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const {setUser} = useContext(UserContext)
    
  return (
    <div className='login-page'>
    <div className='login-container'>
        {
            showLogin ? (
                <>
                <LoginForm setUser={setUser} />
                <hr></hr>
                <p className='form'>
                    Don't have an account? &nbsp;
                    <Button
                    onClick={()=> setShowLogin(false)}>
                        Sign Up
                    </Button>
                </p>
                </>
            ) : (
                <>
                <SignUpForm setUser={setUser} />
                <hr></hr>
                <p className='form'>
                    Don't have an account? &nbsp;
                    <Button
                    onClick={()=> setShowLogin(true)}>
                        Log In
                    </Button>
                </p>
                </>
            )

        }
    </div>
    </div>
  )
}

export default Login
