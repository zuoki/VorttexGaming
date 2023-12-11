import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    // Convertir el id a un número
    const numeros = parseInt(params.usersId);
    const result = await prisma.user.findMany({
      where: {
        id: numeros,
        // include: {
        //   licenses: License,
        // },
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    // Si ocurre algún error, devolver un mensaje de error
    console.log(error);
    return NextResponse.json({
      error: "Ocurrió un error al buscar el usuario",
    });
  }
}
