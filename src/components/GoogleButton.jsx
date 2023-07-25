import React, {useEffect, useState} from "react";
import {performGoogleLogin} from "../utils";
import {useNavigate} from "react-router-dom";

export const GoogleButton = () => {
    const [auth, setAuth] = useState(false);
    async function handleCallbackResponse(response) {
        const res = await performGoogleLogin(response.credential);
        if (res?.status === 200) {
            setAuth(true);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
            // eslint-disable-next-line
            google.accounts.id.initialize({
                client_id: process.env.GOOGLE_CLIENT_ID || '',
                callback: handleCallbackResponse,
            });
            // eslint-disable-next-line
            google.accounts.id.renderButton(document.getElementById('signInDiv'), {
                theme: 'outline',
                size: 'large',
                shape: 'square',
                width: 320,
            });
        } else {
            console.error('Google loading...');
        }
    }, []);

    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate('/carts');
        }
    }, [auth, navigate]);

    return (
        <div id={'signInDiv'} className={'google-input'}></div>
    )
}
