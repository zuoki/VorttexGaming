import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request) {
  const { type, data } = await request.json();

  const id = data?.id;
  console.log(data);

  switch (type) {
    case "user.deleted":
      console.log("ELIMINANDO USUARIO..");
      if (id) {
        console.log("cambioooooooo", id);
        const deletedUser = await prisma.user.update({
          where: { user_id: id },
          data: {
            active: false,
          },
        });
        return NextResponse.json(deletedUser);
      } else {
        console.log("No se pudo eliminar el usuario. id no existe.");
      }
      break;

    case "user.updated":
      console.log("ACTUALIZANDO USUARIO..");
      if (id && data) {
        const updatedUser = await prisma.user.update({
          where: { user_id: id },
          data: {
            email: data?.email,
            username: data?.username,
          },
        });
        return NextResponse.json(updatedUser);
      } else {
        console.log("No se pudo actualizar el usuario. id o data no existen.");
      }
      break;

    case "user.created":
      console.log("CREANDO USUARIO..");
      if (data) {
        const existingUser = await prisma.user.findUnique({
          where: { email: data?.email_addresses[0]?.email_address },
        });

        if (existingUser && existingUser.active === false) {
          try {
            const updatedUser = await prisma.user.update({
              where: { email: data?.email_addresses[0]?.email_address },
              data: {
                active: true,
                user_id: data?.id,
                username: data?.username,
              },
            });
            console.log("actualizandooooooo", updatedUser);
            return NextResponse.json(updatedUser);
          } catch (error) {
            console.error("Error al actualizar el usuario:", error);
          }
        } else {
          const newUser = await prisma.user.create({
            data: {
              user_id: data?.id,
              email: data?.email_addresses[0]?.email_address,
              username: data?.username,
              active: true,
            },
          });
          return NextResponse.json(newUser);
        }
      } else {
        console.log(
          "No se pudo crear el usuario. data o data.user no existen."
        );
      }
      break;

    default:
      console.log("type no reconocida.");
      break;
  }
}
