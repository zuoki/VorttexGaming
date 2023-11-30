import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend('re_A58K1LkF_JUmBLeDpdWPyWHKtCPJ1p8Bc');
export async function POST(request) {
  const { status, email } = request.body;
  console.log(request.body, "requestjasjsa", status,)
  let subject, html;

  try {
    subject = 'Confirmacion de compra';
    html = 'Tu compra ha sido realizada con éxito. Gracias por tu compra. vortex gaming te ama';
    await resend.emails.send({
      from: 'vorttexgaming <onboarding@resend.dev>',
      to: "pabloverat2@gmail.com",
      subject,
      html,
    });
    return NextResponse.json({ message: 'Correo electrónico enviado con éxito.' }); 
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
