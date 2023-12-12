import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("title");

  // Buscar en la base de datos cualquier coincidencia
  const result = await prisma.games.findMany({
    where: {
      title: {
        contains: name,
        mode: "insensitive", // Esto hace que la búsqueda sea insensible a mayúsculas y minúsculas
      },
    },
  });

  return NextResponse.json(result);
}
