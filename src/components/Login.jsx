import React, {useEffect, useState} from "react";
import {performLogin} from "../utils";
import {Title} from "./Title";
import {GoogleButton} from "./GoogleButton";
import {Link, useNavigate} from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await performLogin({email, password});
        if (response?.status === 200) {
            setAuth(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate('/carts');
        }
    }, [auth, navigate, props]);

    return (
        <div>
            <Title/>
            <div className={"auth-form-container"}>
                <h2>Entrar</h2>
                <form className={"login-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"email"}>E-Mail</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={"email"}
                        placeholder={"seuemail@dominio.com.br"}
                        id={"email"}
                        name={"email"}
                        required={true}
                    />
                    <label htmlFor={"password"}>Senha</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                        placeholder={"******"}
                        id={"password"}
                        name={"password"}
                        required={true}
                    />
                    <button type={"submit"}>Entrar</button>
                </form>
                <GoogleButton/>
                <button className={"link-btn"}>
                    <Link to={'/register'} >Ainda não possui uma conta? Registre-se aqui.</Link>
                </button>
            </div>
        </div>
    );
};
