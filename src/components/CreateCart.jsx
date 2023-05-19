import React, {useEffect, useState} from "react";
import {postCart} from "../utils";
import {useNavigate} from "react-router-dom";
import {Logout} from "./Logout";

export const CreateCart = () => {
    const [name, setName] = useState('');
    const [created, setCreated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postCart(name);
        if (response?.status === 201) {
            setCreated(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (created) {
            navigate('/carts');
        }
    }, [created, navigate]);

    return (
        <div>
            <Logout/>
            <div className={"auth-form-container"}>
                <h2>Criar carrinho / evento</h2>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"name"}>Nome do Evento</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type={"text"}
                           placeholder={"Insira o nome"} id={"name"} name={"name"} required={true}/>
                    <button type={"submit"}>Criar</button>
                </form>
            </div>
        </div>
    )
}