import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function PUT(request) {
  const { idUser, idGame } = await request.json();
  console.log(idUser, "id")
  const availableGame = await prisma.games.findFirst({
    where: {
      id: idGame,
      license: {
        some: {
          active: true
        }
      }
    },
    include: {
      license: true,
    },
  });

  if (!availableGame || availableGame.license.length === 0) {
    return NextResponse.json({ error: "No hay licencias disponibles en el momento para este juego" });
  } else {
    const availableLicense = availableGame.license.find(license => license.active);
    const updatedLicense = await prisma.license.update({
      where: {
        id: availableLicense.id,
      },
      data: {
        userId: idUser,
        active: false
      },
    });
    return NextResponse.json(updatedLicense);
  }
}
