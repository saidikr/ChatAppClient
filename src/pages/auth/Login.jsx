import React from 'react'
import { Link } from 'react-router-dom'
import AuthSocial from '../../sections/auth/AuthSocial'
import LoginForm from '../../sections/auth/LoginForm'

const Login = () => {
  return (
    <div className='flex flex-col space-y-4 relative'>
    <h4 className='text-2xl font-semibold' >Login to App</h4>
    <div className='flex space-x-2' >
        <p>New User?</p>
        <Link className='text-blue-600 hover:underline' to="/auth/register" >Create an account</Link>
    </div>
    {/* LoginForm */}
    <LoginForm/>
    {/* Auth Social */}
    <AuthSocial/>
    </div>
  )
}

export default Login