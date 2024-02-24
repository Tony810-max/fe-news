import { Button, Input, InputAdornment } from '@mui/material';
import { Eye, EyeOff, User } from 'lucide-react';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../types/routes';

const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

const FormLogin = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [hide, setHide] = useState(false);
    const onsubmit = async data => {
        try {
            const respons = await axios.post('http://localhost:3001/api/user/login', data);
            if (respons) {
                localStorage.setItem('user', JSON.stringify(respons?.data?.user));
                toast.success(respons?.data?.message);
                setTimeout(navigate(ROUTES.ADMIN), 1000);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className="flex flex-col gap-14" onSubmit={handleSubmit(onsubmit)}>
            <Input
                endAdornment={
                    <InputAdornment position="end">
                        <User />
                    </InputAdornment>
                }
                disableUnderline
                className=" border-b border-[#ccc]"
                placeholder="email"
                name="email"
                {...register('email')}
            />
            {errors.email?.message && (
                <p className="text-red-600 font-bold font-Roboto">{errors.email?.message}</p>
            )}
            <Input
                type={!hide ? 'password' : 'text'}
                endAdornment={
                    <InputAdornment
                        position="end"
                        className="cursor-pointer"
                        onClick={() => {
                            setHide(!hide);
                        }}
                    >
                        {!hide ? <EyeOff /> : <Eye />}
                    </InputAdornment>
                }
                disableUnderline
                className=" border-b border-[#ccc]"
                placeholder="password"
                name="password"
                {...register('password')}
            />
            {errors.password?.message && (
                <p className="text-red-600 font-bold font-Roboto">{errors.password?.message}</p>
            )}
            <Button
                type="submit"
                variant="contained"
                className="uppercase font-Roboto text-white bg-black round"
            >
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
