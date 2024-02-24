import React from 'react';

import imgLogin from '../../../assets/images/loginPage/image4.webp';
import FormWrapper from './FormWrapper';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    return (
        <div className="relative">
            <ToastContainer />
            <img src={imgLogin} alt="imgLogin" className="w-full max-h-screen" />
            <FormWrapper />
        </div>
    );
};

export default LoginPage;
