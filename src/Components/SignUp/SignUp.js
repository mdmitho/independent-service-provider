import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate ,useLocation } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import toast, { Toaster } from 'react-hot-toast';

    
const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);

const handleEmailChange =(e)=>{
    const emailCheck =/\S+@\S+\.\S+/;
    const validEmail = emailCheck.test(e.target.value);
    if(validEmail){
        setUserInfo({...userInfo, email: e.target.value}) 
        setErrors({...errors, email: ""})      
    } else {
        setErrors({...errors, email: "Invalid email"})
        setUserInfo({...userInfo, email: ""})
    }
}

useEffect(() => {
    const error = hookError 
    if(error){
        switch(error?.code){
            case "auth/invalid-email":
                toast.error("Invalid email, please provide a valid email");
                break;
            
            case "auth/invalid-password":
                toast.error("Wrong password!!")
                break;
            default:
                toast.error("something went wrong!!")
        }
    }
}, [hookError])

const handlePasswordChange =(e)=>{
    const passwordCheck = /.{6,}/;
    const validPassword = passwordCheck.test(e.target.value);
    if(validPassword){
        setUserInfo({...userInfo, password: e.target.value});
        setErrors({...errors, password: ""});
    } else {
        setErrors({...errors, password: "Minimum 6 characters!"});
        setUserInfo({...userInfo, password: ""})
    }
}
const handleConfirmPassword =(e)=>{
    if (e.target.value === userInfo.password) {
        setUserInfo({ ...userInfo, confirmPass: e.target.value });
        setErrors({ ...errors, password: "" });
    } else {
        setErrors({ ...errors, password:"Password's don't match" });
        setUserInfo({ ...userInfo, confirmPass: "" });
    }
}

const handleLogin=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password)
}
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

useEffect(() => {
    if (user) {
        navigate(from);
    }
}, [user]);

    return (
        <div className='container w-50 shadow-lg p-3 mb-5 bg-body rounded-3 mt-5 '>
            <div className="text-center">
            <h1 className='mt-5 mb-3 color'>SignUp</h1>
            </div>
           

            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleConfirmPassword}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
 <div className="text-center mt-3 ">
 <Button variant="info" type="submit" className='text-white px-4'>
    Sign Up
  </Button>
  <Toaster />
  <p className='mt-3'>You have an account ? <Link to="/login" className='text-decoration-none color ms-2  text-danger'>Login</Link> </p>
 </div>
</Form>
<SocialLogin></SocialLogin>
        </div>
    );

};

export default SignUp;