import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const findLicense = await prisma.license.findMany({
    include: {
      game: {
        select: {
          title: true,
        },
      },
    },
  });

  return NextResponse.json(findLicense);
}

export async function POST(request) {
  const { name, active, gameTitle } = await request.json();

  // Buscar el juego por su título
  const game = await prisma.games.findUnique({
    where: {
      title: gameTitle,
    },
  });

  // Verificar si el juego existe
  console.log(game, "el juego")
  if (!game) {
    return NextResponse.json({ error: 'El juego no existe.' });
  }

  // Crear la licencia y asociarla al juego
  const createLicense = await prisma.license.create({
    data: {
      name,
      active,
      game: {
        connect: {
          id: game.id,
        },
      },
    },
  });

  return NextResponse.json(createLicense);
}

export async function PUT(request) {
  const { id, active } = await request.json();

  const updatedLicense = await prisma.license.update({
    where: {
      id: id,
    },
    data: {
      active: active,
    },
  });

  return NextResponse.json(updatedLicense);
}
