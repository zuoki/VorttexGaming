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
  const { name, active, game } = await request.json();

  const createLicense = await prisma.license.create({
    data: {
      name,
      active,
      game: {
        connect: {
          title: game,
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
