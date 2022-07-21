import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="text-center">
      <h1>Login Page</h1>
      <h2>I can manage Login full System with firebase </h2>
      <h3>
        I am a full Stack web developer.( React js,Node js,Express js , MongoBD)
      </h3>
      <Link to="/home">
        <button className="btn-css">Back Home</button>
      </Link>
    </div>
  )
}

export default Login
