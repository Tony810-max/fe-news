import React from 'react';
import FormLogin from './FormLogin';
import { Link } from 'react-router-dom';
import ROUTES from '../../../types/routes';

const FormWrapper = () => {
    return (
        <div className="bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-10 py-6 rounded-3xl shadow-2xl">
            <span className="py-11 px-1 block font-bold font-Roboto text-xl text-center">
                Cafef
            </span>
            <FormLogin />
            <div className="mt-2">
                <span className="font-Roboto">{`Don't have an account `}</span>
                <Link to={ROUTES.SINGUP} className="text-blue-500 underline font-Roboto">
                    Create account
                </Link>
            </div>
        </div>
    );
};

export default FormWrapper;
