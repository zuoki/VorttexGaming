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
  const { name, active, titleGame } = await request.json();
  try {
    const createLicense = await prisma.license.create({
      data: {
        name,
        active: true,
        game: {
          connect: {
            title: titleGame,
          },
        },
      },
    });

    return NextResponse.json(createLicense);
  } catch (error) {
    return NextResponse.json(
      { message: "Esta licencia con este nombre ya está creada" },
      400
    );
  }
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
