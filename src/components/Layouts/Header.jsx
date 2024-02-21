import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../types/routes';
import { Home } from 'lucide-react';
import NavHeader from '../NavHeader';

const Header = () => {
    return (
        <div className="flex justify-center bg-[#004370] fixed w-full z-30">
            <div className="container">
                <div className="flex justify-between w-full items-center">
                    <Link to={ROUTES.HOME}>
                        <Home color="white" />
                    </Link>
                    <NavHeader nav={ROUTES.HOME} title={'Xã hội'} />
                    <NavHeader nav={ROUTES.HOME} title={'Chứng khoáng'} />
                    <NavHeader nav={ROUTES.HOME} title={'Bất động sản'} />
                    <NavHeader nav={ROUTES.HOME} title={'DOANH NGHIỆP'} />
                    <NavHeader nav={ROUTES.HOME} title={'Ngân hàng'} />
                    <NavHeader nav={ROUTES.HOME} title={'Tài chính quốc tế'} />
                    <NavHeader nav={ROUTES.HOME} title={'Vĩ mô'} />
                    <NavHeader nav={ROUTES.HOME} title={'kinh tế số'} />

                    <div className="flex gap-3 items-center">
                        <Link
                            to={ROUTES.LOGIN}
                            className="text-lg font-medium uppercase text-white p-2"
                        >
                            Sign in
                        </Link>
                        <Link
                            to={ROUTES.SINGUP}
                            className="text-lg font-medium uppercase text-white p-2"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
