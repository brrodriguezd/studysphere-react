import express from "express";
import cors from "cors";
//SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://yvesvjnkzjfsesaxbtys.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZXN2am5rempmc2VzYXhidHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MzQ0NDAsImV4cCI6MjAyOTQxMDQ0MH0.AuGmOiya2KUjrAbJgTZ9DMyvePSskgauatcduWl8IAk"
);

// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
    "TEST-8724961029538498-081917-3c1dc0853a620a9656c4973b8e8de226-679155606",
});

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
        },
      ],
      // aqui se redirecciona a diferentes paginas para cada caso
      back_urls: {
        success: `https://studysphere-react.vercel.app/success?userId=${req.body.userId}`,
        failure: "https://studysphere-react.vercel.app/failure",
        pending: `https://studysphere-react.vercel.app/success?userId=${req.body.userId}`,
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (e) {
    console.log(`error: ${e}`);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
});

app.post("/update_user", async (req, res) => {
  try {
    const { error } = await supabase
      .from("usuarios")
      .update({ tipo_cuenta: "0" })
      .eq("id", req.body.userId);
    if (error) {
      console.log(error);
    }
    res.status(200).json({ success: "1" });
  } catch (e) {
    console.log(`error: ${e}`);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
