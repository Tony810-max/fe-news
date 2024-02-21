/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

const SocialButton = ({ image, imageClassname, title, className, type }) => {
    return (
        <button type={type ?? 'button'} className={classNames('flex gap-2 p-4', className)}>
            <img src={image} alt="social" className={classNames('w-6 h-6', imageClassname)} />
            <span className={'text-black whitespace-nowrap'}>{title}</span>
        </button>
    );
};

export default SocialButton;
