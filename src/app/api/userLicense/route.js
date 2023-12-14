import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function PUT(request) {
  const { email, id } = await request.json();

  const availableGame = await prisma.games.findFirst({
    where: {
      id: id,
      license: {
        some: {
          active: true,
        },
      },
    },
    include: {
      license: true,
    },
  });
  console.log(availableGame);

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!availableGame || availableGame.license.length === 0) {
    return NextResponse.json({
      error: "No hay licencias disponibles en el momento para este juego",
    });
  } else {
    const availableLicense = availableGame.license.find(
      (license) => license.active
    );
    const updatedLicense = await prisma.license.update({
      where: {
        id: availableLicense.id,
      },
      data: {
        userId: user.id,
        active: false,
      },
    });
    return NextResponse.json(updatedLicense);
  }
}
