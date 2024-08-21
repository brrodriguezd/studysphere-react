import express from "express"
import cors from "cors";
//SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-8724961029538498-081917-3c1dc0853a620a9656c4973b8e8de226-679155606' });

// PARTE DEL SERVIDOR
//const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

//recibe el nombre, cantidad y precio y crea lo necesario para tener el botón de la compra
app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                }
            ],
            // aqui se redirecciona a diferentes paginas para cada caso
            back_urls: {
                success: "https://www.success.com",
                failure: "https://www.youtube.com",
                pending: "https://www.youtube.com",
            },
            auto_return: "approved",
        };
        const preference = new Preference(client)
        const result = await preference.create({ body });
        res.json({ id: result.id })
    } catch (e) {
        console.log(`error: ${e}`)
        res.status(500).json({ error: "Error al crear la preferencia" });
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
