import React, {useEffect, useState} from "react";
import {removeProduct} from "../utils";
import {useNavigate, useParams} from "react-router-dom";

export const RemoveProduct = (props) => {
    const { id } = useParams();
    const [removed, setRemoved] = useState(false);

    const handleRemove = async (e) => {
        e.preventDefault();
        const response = await removeProduct({...props, id});
        if (response?.status === 200) {
            setRemoved(true);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (removed) {
            navigate('/carts');
        }
    }, [removed, navigate]);

    return (
            <button onClick={handleRemove}>Remover</button>
    )
}