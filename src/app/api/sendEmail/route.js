// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   const request = await req.json();
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "pabloverat2@gmail.com",
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: '"Topabli👻" <pabloverat2@gmail.com>', // sender address
//     to: request.email,
//     subject: "Confirmación de compra ✔",
//     html: `
//     <h1> Le informamos que su compra en Vorttex Gaming ha sido realizada con éxito.</h1>

//     <p>
//       Tu compra ha sido realizada con éxito. Le deseamos que disfrute de sus juegos y que tenga una excelente jornada gaming..
//      <br />
//      Estas son tus licencias: ${request.nameLicense} 🐱‍🏍✨

//       <strong>Atentamente,</strong>

//       <br />

//       <strong>Vorttex Gaming</strong>
//     </p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json("Correo enviado con éxito");
//   } catch (error) {
//     return NextResponse.json("Error al enviar correo:", error);
//   }
// }

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
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Topabli👻" <pabloverat2@gmail.com>',
    to: request.email,
    subject: "Confirmación de compra ✔",
    html: `
    <div style="max-width: 600px; margin: 0px auto; background-color: #f2f2f2; padding: 20px; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px; text-align: center;">
    <h1 style="color: #333333; text-align: center;">Le informamos que su compra en Vorttex Gaming ha sido realizada con &eacute;xito.</h1>
    <hr />
    <p style="color: #555555; line-height: 1.6; text-align: center;">Tu compra ha sido realizada con &eacute;xito. Le deseamos que disfrute de sus juegos y que tenga una excelente jornada gaming. <br /> Licencia(s):<br /><br /> <span style="background-color: #ffd700; padding: 5px; border-radius: 5px; font-weight: bold;">${request.nameLicense}<p style="color: #555555; line-height: 1.6; text-align: center;">Tu compra ha sido realizada con &eacute;xito. Le deseamos que disfrute de sus juegos y que tenga una excelente jornada gaming. <br /> Licencia(s):<br /><br /> <span style="background-color: #ffd700; padding: 5px; border-radius: 5px; font-weight: bold;">${request.nameLicense}$</span></p>${request.gameName}</span></p>
    <p style="color: #555555; line-height: 1.6; text-align: center;">🐱&zwj;🏍✨</p>
    <p style="color: #555555; line-height: 1.6; text-align: center;"><img src="https://i.gifer.com/hdt.gif" alt="" width="128" height="190" /></p>
    <hr /><strong>Atentamente,</strong> <br /> <strong>Vorttex Gaming</strong></div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json("Correo enviado con éxito");
  } catch (error) {
    return NextResponse.json("Error al enviar correo:", error);
  }
}
