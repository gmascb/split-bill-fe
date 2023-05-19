import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {performJoinCart} from "../utils";
import {Logout} from "./Logout";

export const JoinCart = () => {
    const [id, setId] = useState('');
    const [joined, setJoined] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await performJoinCart(id);
        if (response?.status === 200) {
            setJoined(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (joined) {
            navigate('/carts');
        }
    }, [joined, navigate]);

    return (
        <div>
            <Logout/>
            <div className={"auth-form-container"}>
                <h2>Ingressar em carrinho / evento</h2>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"name"}>ID do Evento</label>
                    <input value={id} onChange={(e) => setId(e.target.value)} type={"text"}
                           placeholder={"Insira o ID do Evento"} id={"id"} name={"id"} required={true}/>
                    <button type={"submit"}>Ingressar</button>
                </form>
            </div>
        </div>
    )
}