import { Button } from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminPage = () => {
    const [data, setData] = useState();
    const fetchUser = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/user');
            if (response) {
                setData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="container">
                <span>Admin Page</span>
                <table className="w-full">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>Create At</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                    {data?.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{format(item.createdAt, 'dd/MM/yyyy HH:mm:ss')}</td>
                            <td>{item.updatedAt}</td>
                            <td>
                                <Button variant="outlined">Delete</Button>
                                <Button variant="outlined">Update</Button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
