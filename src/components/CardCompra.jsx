import './CardCompra.css';
import React from 'react'
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';

const CardCompra = () => {
    useEffect(() => {
        initMercadoPago('TEST-74c3107d-f2a4-4f11-8cac-fec600284f9f', { locale: 'es - CO' })
    }, []);
    const [preferenceId, setPreferenceId] = useState(null);
    const crearPreferencia = async () => {
        try {
            const response = await axios.post("http://localhost:3001/create_preference", {
                title: "Study Sphere Premium",
                quantity: 1,
                price: 10000,
            });
            const { id } = response.data;
            return id;
        } catch (e) {
            console.log(e);
        }

    }
    const compra = async () => {
        const id = await crearPreferencia();
        if (id) {
            setPreferenceId(id);
        }
    }
    return (
        <div className='contenedor-compra'>
            <div className='compra-premium'>
                card_compra
                <button onClick={compra}> Cambiate a premium </button>
                {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{
                    texts: { valueProp: 'smart_option' }
                }} />}

            </div>
        </div>
    )
}

export default CardCompra