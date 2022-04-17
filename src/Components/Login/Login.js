import { Button } from 'bootstrap';
import React, { useEffect, useRef } from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
const emailRef = useRef('')
const passwordRef = useRef('')
const navigate = useNavigate()
const location =useLocation()
let from = location.state?.from?.pathname || "/"
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleLogin = event =>{
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    // console.log(email, password);
    signInWithEmailAndPassword(email, password)
    emailRef.current.value=''
    passwordRef.current.value=''
}

if(user){
    navigate(from, {replace:true})
    toast.success('Successfully Login!')
  }

  const resetPassword =async ()=>{
    const email = emailRef.current.value
  if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
  }
  else{
    toast('please enter your email')
  }
  }


  useEffect(() => {
    if(error){
        switch(error?.code){
            case "auth/invalid-email":
                toast.error("Invalid email provided, please provide a valid email");
                break;
            
            case "auth/invalid-password":
                toast.error("Wrong password. Intruder!!")
                break;
            default:
                toast.error("something went wrong")
        }
    }
}, [error])
    return (
     <div className="">
          <div className='container w-50 shadow-lg p-3 mb-5 bg-body rounded-3 mt-5 '>
            <div className="text-center">
            <h1 className='mt-5 mb-3 color'>LOGIN</h1>
            </div>
           

            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  ref={passwordRef} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
 <div className="text-center mt-3 ">
 <button type="submit" class="btn btn-info text-white mt-2 px-4">Login</button>
  <Toaster />
  <p className='mt-3'>You Don't have an account ? <Link to="/signup" className='text-decoration-none color ms-2  text-danger'>Sign up Now</Link> </p>
  <p>Forget Password ? <button  className="text-primary pe-auto text-decoration-none btn btn-link border-0" onClick={resetPassword}>Reset Password</button></p>
 </div>
</Form>
<SocialLogin></SocialLogin>
        </div>
     </div>
    );
};

export default Login;