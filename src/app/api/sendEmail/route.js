import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const request = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pabloverat2@gmail.com",
      pass: "pluk euby ygwb svcu",
    },
  });

  const mailOptions = {
    from: '"Topabli👻" <pabloverat2@gmail.com>', // sender address
    to: request.email,
    subject: "Holita ✔",
    html: `Aca esta tu licencia, ${request.license}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json("Correo enviado con éxito");
  } catch (error) {
    return NextResponse.json("Error al enviar correo:", error);
  }
}
