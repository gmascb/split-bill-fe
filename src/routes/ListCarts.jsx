import React, {useEffect, useState} from 'react';
import {getCartsList, getBalance} from "../utils";
import CartsData from "../components/CartsData";
import {Link} from "react-router-dom";
import {Logout} from "../components";

const ListCarts = () => {
    const [cartsList, setCartsList] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const token = sessionStorage.getItem('Access-Token');
    let userName = token ? JSON.parse(atob(token.split('.')[1]))?.name : null;

    useEffect(() => {
        const fetchData = async () => {
            return await getCartsList();
        };
        fetchData().then(result => setCartsList(result));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            return await getBalance();
        };
        fetchData().then(result => setTotalBalance(result));
    }, []);

    return <>
        <Logout/>
        <div>
            <h1>Bem vindo, {userName}!</h1>
            <h2>Seu balanço atual é de {totalBalance > 0 ? `R$${totalBalance}` : `- R$${totalBalance * (-1)}`}</h2>
        <table>
            <thead>
            <tr>
                <th>Carrinho / Evento</th>
                <th>Qtde de Participantes</th>
                <th>Valor Total</th>
            </tr>
            </thead>
            <tbody>
            <CartsData carts={cartsList}/>
            </tbody>
        </table>
            <button><Link to={'/createCart'}>Criar carrinho / evento</Link></button><br /><br />
            <button><Link to={'/joinCart'}>Ingressar em carrinho / evento</Link></button>
        </div>
    </>
};

export default ListCarts;