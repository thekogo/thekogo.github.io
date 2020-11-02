import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import localStorageService from '../../services/localStorageService';
import jwtDecode from 'jwt-decode';

export default function Profile(props) {

    const [name, setName] = useState("");
    const [id, setId] = useState(0);

    const logout = () => {
        localStorageService.removeToken();
        props.setRole("guest");
    }

    useEffect(() => {
        const token = localStorageService.getToken();
        if (token) {
            const user = jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    }, [])

    return (
        <div>
            <h2>
                Profile Page
            </h2>
            <p>
                <strong>Name:</strong> {name}
                <br />
                <strong>User ID:</strong> {id}
            </p>
            <Link to="/todo">
                <Button>Go to Todo</Button>
            </Link>
            <br />
            <br />
            <Button onClick={logout}>log out</Button>
        </div>
    );
}
