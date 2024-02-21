/* eslint-disable react/prop-types */
import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const SelectComponent = ({ data, className }) => {
    const [defaultValue, setDefaultValue] = useState(data[0]?.value);

    const handleChangeValue = e => {
        setDefaultValue(e?.target?.value);
    };

    return (
        <Select
            className={className}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={defaultValue}
            label="Age"
            onChange={handleChangeValue}
        >
            {data?.map((item, index) => (
                <MenuItem key={index} value={item?.value}>
                    {item?.label}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectComponent;
