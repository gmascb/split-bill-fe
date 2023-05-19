import React, {useEffect, useState} from "react";
import {addProduct} from "../utils";
import {useNavigate, useParams} from "react-router-dom";
import {Logout} from "./Logout";

export const CreateProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [added, setAdded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addProduct({id, name, value});
        if (response?.status === 200) {
            setAdded(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (added) {
            navigate(`/cart/${id}`);
        }
    }, [added, navigate]);

    return (
        <div>
            <Logout/>
            <div className={"auth-form-container"}>
                <h2>Adicionar Produto</h2>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"name"}>Nome do Produto</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type={"text"}
                           placeholder={"Insira o nome"} id={"name"} name={"name"} required={true}/>
                    <input value={value} onChange={(e) => setValue(e.target.value)} type={"number"}
                           placeholder={"Insira o valor"} id={"value"} name={"value"} required={true}/>
                    <button type={"submit"}>Adicionar</button>
                </form>
            </div>
        </div>
    )
}