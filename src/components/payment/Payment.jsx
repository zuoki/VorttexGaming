"use client";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Swal from "sweetalert2";
import { useStoreCart } from "@/zustand/store";

const Payment = () => {
  const [statebuy, setStateBuy] = useState(" COMPRA EN PROGRESO ");
  const [css, setCss] = useState("progress");
  const data = useUser();
  const email = data?.user?.emailAddresses?.[0]?.emailAddress;

  const { emptyCart, gamesInCart } = useStoreCart();
  const client = process.env.NEXT_PUBLIC_REACT_APP_PAYPAL_CLIENT_ID;
  let id;
  let gameName;

  if (gamesInCart.length > 0) id = gamesInCart[0].id;
  console.log(id);
  if (gamesInCart.length > 0) gameName = gamesInCart[0].title;

  const API_SEND_USER_LICENSE_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_USER_LICENSE_LOCAL
      : process.env.NEXT_PUBLIC_URL_REQUESTS_USER_LICENSE_DEPLOY;

  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_REQUESTS_PAYMENT_LOCAL
      : process.env.NEXT_PUBLIC_URL_REQUESTS_PAYMENT_DEPLOY;

  return (
    <div className="paypal">
      <div className="visualP">
        <h1 className={css}>{statebuy}</h1>
        <PayPalScriptProvider
          options={{
            clientId: client,
          }}
        >
          <PayPalButtons
            style={{
              label: "pay",
            }}
            createOrder={async () => {
              const res = await fetch(API_URL, {
                method: "POST",
                body: 1
              });
              const order = await res.json();
              return order.id;
            }}
            onApprove={async (data, actions) => {
              Swal.fire({
                background: "#fff",
                title: "Success!...",
                text: "Your purchase was successful, you will receive the license by email",
                imageUrl:
                  "https://media0.giphy.com/media/XreQmk7ETCak0/giphy.gif?cid=ecf05e47390bwrvnc8r79ic7r23v8yovq0s5lw4uz7kdcb4u&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
              });
              // agregamos async
              await actions.order.capture(); // agregamos await *Debbb
              // Vacía el carrito de compras después de que se haya realizado un pago exitoso

              const response = await axios.put(
                API_SEND_USER_LICENSE_URL,
                { email, id },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const dataPut = response.data;
              const nameLicense = dataPut.name;

              const API_SEND_EMAIL_URL =
                process.env.NODE_ENV === "development"
                  ? process.env.NEXT_PUBLIC_URL_REQUESTS_SEND_EMAIL_LOCAL
                  : process.env.NEXT_PUBLIC_URL_REQUESTS_SEND_EMAIL_DEPLOY;

              await axios.post(
                API_SEND_EMAIL_URL,
                { email, nameLicense, gameName },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              emptyCart();
              setTimeout(function () {
                window.location.href = "/";
              }, 5000);
            }}
            // fin bloque backend
            onCancel={async (data) => {
              Swal.fire({
                background: "#fff",
                title: "Opss!...",
                text: "It seems that you have canceled the purchase",
                imageUrl:
                  "https://static.vecteezy.com/system/resources/previews/017/396/313/non_2x/illustration-businessman-holding-an-empty-wallet-free-png.png",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
              });

              const res = await fetch(API_SEND_EMAIL_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                }),
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Payment;
