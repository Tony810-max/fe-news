/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = ({ nav, title }) => {
    return (
        <Link to={nav} className="uppercase text-lg font-normal text-white p-2">
            {title}
        </Link>
    );
};

export default NavHeader;
