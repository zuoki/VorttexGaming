import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// FUNCION QUE NO FILTRA MAYUS Y MINUS
// export async function GET(request) {
//   const url = new URL(request.url);
//   const name = url.searchParams.get("username");

//   // Buscar en la base de datos cualquier coincidencia
//   const result = await prisma.user.findMany({
//     where: {
//       username: {
//         contains: name,
//       },
//     },
//   });

//   //return new Response(JSON.stringify({ name, result }), { status: 200 })
//   return NextResponse.json(result);
// }

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("username").toLowerCase();

  // Buscar en la base de datos cualquier coincidencia
  const result = await prisma.user.findMany({
    where: {
      username: {
        contains: name,
      },
    },
  });

  // Filtrar los resultados para que sean insensibles a mayúsculas y minúsculas
  const filteredResult = result.filter((user) =>
    user.username.toLowerCase().includes(name)
  );

  return NextResponse.json(filteredResult);
}
