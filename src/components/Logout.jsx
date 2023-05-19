import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Logout = () => {
    const [logout, setLogout] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        sessionStorage.removeItem('Access-Token');
        setLogout(true);
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (logout) {
            navigate('/login');
        }
    }, [logout, navigate]);

    return (
        <div>
            <button className={'link-btn logout-button'} onClick={handleClick}>Sair</button>
        </div>
    );
};
