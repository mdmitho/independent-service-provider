import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

const handleEmailChange =(e)=>{
    const email =e.target.value
    setUserInfo({email})
}

const handlePasswordChange =(e)=>{
    const password = e.target.value
    setUserInfo({password})
}

const handleLogin=(e)=>{
    e.preventDefault()
    console.log(userInfo)
    createUserWithEmailAndPassword(userInfo.email, userInfo.password)
}

    return (
        <div className='container w-50 shadow-lg p-3 mb-5 bg-body rounded-3 mt-5 '>
            <div className="text-center">
            <h1 className='mt-5 mb-3 color'>LOGIN</h1>
            </div>
           

            <Form onBlur={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
 <div className="text-center mt-3 ">
 <Button variant="info" type="submit" className='text-white px-4'>
    Submit
  </Button>
  <p className='mt-3'>You Don't have an account ? <Link to="/signup" className='text-decoration-none color ms-2  text-danger'>Sign up first</Link> </p>
 </div>
</Form>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;