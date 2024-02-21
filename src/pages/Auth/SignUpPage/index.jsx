import React from 'react';

import LogoImg from '../../../assets/images/logo.webp';
import ElementImg from '../../../assets/images/Abstraction.webp';
import SignUpForm from './components/SignUpForm';

const SignUpPage = () => {
    return (
        <div className="min-h-screen w-full bg-[#43697b] flex justify-center items-center">
            <div className="bg-[#1f485b] rounded-xl flex">
                <div className="max-w-[500px] flex flex-col gap-14 p-10 relative">
                    <img src={LogoImg} alt="logo" className="w-32 h-32" />
                    <span className="text-5xl w-[360px] tracking-[2.88px] whitespace-normal font-Poppins leading-tight text-white">
                        Getting Started With VR Creation
                    </span>
                    <img src={ElementImg} alt="element" className="min-w-[630px] h-[670px] z-10" />
                </div>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
