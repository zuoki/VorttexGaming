import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientID = process.env.NEXT_PUBLIC_REACT_APP_PAYPAL_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_REACT_APP_PAYPAL_SECRET_ID;

const environment = new paypal.core.SandboxEnvironment(clientID, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req, res) {
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "60.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "60.00",
            },
          },
        },
        items: [
          {
            name: "GTA 5",
            description: "key of the game",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "60.00",
            },
          },
        ],
      },
    ],
  });

  const response = await client.execute(request);

  return NextResponse.json({
    id: response.result.id,
  });
}
