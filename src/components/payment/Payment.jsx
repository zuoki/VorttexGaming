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
  //const email = data?.user?.emailAddresses?.[0]?.emailAddress;
  const email = "riosdeborasabrina@gmail.com";
  const { emptyCart } = useStoreCart();

  return (
    <div className="paypal">
      <div className="visualP">
        <h1 className={css}>{statebuy}</h1>
        <PayPalScriptProvider
          options={{
            clientId:
              "AVwb2hp2ZMkuRiQgJ1GujcCeizroHgzH-pOwUlWYdCNmPNcgRPaDjwrVg4BfI_k98Qd4DtUVpsYCquD8",
          }}
        >
          <PayPalButtons
            style={{
              label: "pay",
            }}
            createOrder={async () => {
              const res = await fetch("/api/checkout", {
                method: "POST",
              });
              const order = await res.json();
              return order.id;
            }}
            onApprove={async (data, actions) => {
              Swal.fire({
                background: '#fff',
                title: "Success!...",
                text: "You will be sent the codes for the games purchased",
                imageUrl: "https://media0.giphy.com/media/XreQmk7ETCak0/giphy.gif?cid=ecf05e47390bwrvnc8r79ic7r23v8yovq0s5lw4uz7kdcb4u&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
              // agregamos async
              await actions.order.capture(); // agregamos await *Debbb 
              // Vacía el carrito de compras después de que se haya realizado un pago exitoso


              await axios.post(
                "/api/sendEmail",
                { email },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              emptyCart();
            }}
            // fin bloque backend
            onCancel={async (data) => {
              
              Swal.fire({
                background: '#fff',
                title: "Opss!...",
                text: "It seems that you have canceled the purchase",
                imageUrl: "https://static.vecteezy.com/system/resources/previews/017/396/313/non_2x/illustration-businessman-holding-an-empty-wallet-free-png.png",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });

              // Hacer una solicitud al back-end para enviar un correo electrónico
              await fetch("/api/sendEmail", {
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
