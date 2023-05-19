import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getCart} from "../utils";
import ProductsData from "../components/ProductsData";
import {Logout} from "../components";

const Cart = () => {
    const { id } = useParams();
    const [cart, setCart] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            return await getCart(id);
        };
        fetchData().then(result => setCart(result));
    }, []);

    return (
        <>
            <div>
                <Logout/>
                <h2>{cart?.name}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Pago por</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <ProductsData cartId={id} products={cart?.products || []}/>
                    </tbody>
                </table>
                <button><Link to={`/addProduct/${id}`}>Adicionar Produto</Link></button>
            </div>
        </>
    )
};

export default Cart;