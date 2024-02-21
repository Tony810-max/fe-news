import { Button, Input, InputAdornment } from '@mui/material';
import { Eye, EyeOff, User } from 'lucide-react';
import React, { useState } from 'react';

const FormLogin = () => {
    const [hide, setHide] = useState(false);
    return (
        <form className="flex flex-col gap-14">
            <Input
                endAdornment={
                    <InputAdornment position="end">
                        <User />
                    </InputAdornment>
                }
                disableUnderline
                className=" border-b border-[#ccc]"
                placeholder="User"
            />
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
            />
            <Button variant="contained" className="uppercase font-Roboto text-white bg-black round">
                Entrar
            </Button>
        </form>
    );
};

export default FormLogin;
