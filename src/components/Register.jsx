import React, {useEffect, useState} from "react";
import {Title} from "./Title";
import {performRegister} from "../utils/perform_register";
import {Link, useNavigate} from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [created, setCreated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await performRegister({name, email, password})
        if (response?.status === 200) {
            setCreated(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (created) {
            navigate('/login');
        }
    }, [created, navigate, props]);

    return (
        <div>
            <Title/>
            <div className={"auth-form-container"}>
                <h2>Registrar</h2>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"name"}>Nome Completo</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type={"text"}
                           placeholder={"Seu Nome Completo"} id={"name"} name={"name"} required={true}/>
                    <label htmlFor={"email"}>E-Mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"}
                           placeholder={"seuemail@dominio.com.br"} id={"email"} name={"email"} required={true}/>
                    <label htmlFor={"password"}>Senha</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"}
                           placeholder={"******"} id={"password"} name={"password"} required={true}/>
                    <button type={"submit"}>Registrar</button>
                </form>
                <button className={"link-btn"}>
                    <Link to={'/login'} >Já possui uma conta? Efetue login aqui.</Link>
                </button>
            </div>
        </div>
    )
}