import React from 'react';
import google from '../../img/logo/google logo.png'
import github from '../../img/logo/GitHub logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    return (
        <div className='mt-3'>
            <button onClick={() => signInWithGoogle()} className="btn btn-info d-block  mx-auto w-50 my-3">
            <img style={{width: '30px'}} src={google} alt=''/>
         <span className="px-2 text-white">  Google Sing IN</span>
            </button>
            <button className="btn btn-info d-block  mx-auto w-50 my-3">
            <img style={{width: '30px'}} src={github} alt=''/>
         <span className="px-2 text-white">  Google Sing IN</span>
            </button>
        </div>
    );
};

export default SocialLogin;