import React from 'react';
import SelectComponent from '../../../../components/SelectComponent';
import SocialButton from '../../../../components/SocialButton';
import { Button, Divider, Input } from '@mui/material';

import GGLogo from '../../../../assets/images/gg-logo.webp';
import FBLogo from '../../../../assets/images/facebook-logo.webp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../../../../types/routes';

const DEFAULT_SELECT_DATA = [
    {
        label: 'English (UK)',
        value: 'uk',
    },
    {
        label: 'Viet Nam (VN)',
        value: 'vn',
    },
];

const SignUpForm = () => {
    const navigate = useNavigate();
    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
        })
        .required();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async data => {
        try {
            const response = await axios.post('http://localhost:3001/api/user/sign-up', data);
            if (response) {
                toast.success(response?.data?.message);
                reset();
                setTimeout(() => {
                    navigate(ROUTES.LOGIN);
                }, 4000);
            }
        } catch (error) {
            if (error?.response?.status === 400) toast.error('Email is duplicated');
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl relative bg-white p-52 flex flex-col"
        >
            <ToastContainer />
            <SelectComponent
                className={'self-end w-fit absolute top-6 right-10'}
                data={DEFAULT_SELECT_DATA}
            />
            <span className="text-3xl font-bold">Create Account</span>
            <div className="flex justify-between mt-12 gap-4">
                <SocialButton
                    className={'px-4 py-2 border border-gray-200 rounded-sm'}
                    image={GGLogo}
                    title={'Signup with Google'}
                />{' '}
                <SocialButton
                    className={'px-4 py-2 border border-gray-200 rounded-sm'}
                    image={FBLogo}
                    title={'Signup with Facebook'}
                />
            </div>
            <Divider className="py-12">OR</Divider>
            <Input
                {...register('name')}
                name="name"
                className="px-4 py-3 mt-4"
                placeholder="Full Name"
            />
            {errors.name && <span className="text-red-500">{errors?.name.message}</span>}
            <Input
                {...register('email')}
                name="email"
                className="px-4 py-3 mt-4"
                placeholder="Email"
            />
            {errors.email && <span className="text-red-500">{errors?.email.message}</span>}

            <Input
                type="password"
                {...register('password')}
                name="password"
                className="px-4 py-3 mt-4"
                placeholder="Password"
            />
            {errors.password && <span className="text-red-500">{errors?.password.message}</span>}

            <Button
                type="submit"
                variant="contained"
                className="bg-[#1f485b] text-white font-bold h-14 mt-8"
            >
                Create Account
            </Button>
            <span className="mt-4">
                Already have an account?{' '}
                <Link to={ROUTES.LOGIN} className="underline font-Roboto font-bold text-blue-500">
                    Log In
                </Link>
            </span>
        </form>
    );
};

export default SignUpForm;
