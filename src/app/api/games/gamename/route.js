// import { NextResponse } from "next/server";
// import { prisma } from "@/libs/prisma";

// export async function GET(request) {
//   const url = new URL(request.url);
//   const name = url.searchParams.get("title").toLowerCase();

//   // Buscar en la base de datos cualquier coincidencia
//   const result = await prisma.games.findMany({
//     where: {
//       title: {
//         contains: name,
//       },
//     },
//   });

//   return NextResponse.json(result);
// }

// export async function GET(request) {
//   const url = new URL(request.url);
//   const name = url.searchParams.get("title").toLowerCase();

//   // Buscar en la base de datos cualquier coincidencia
//   const result = await prisma.games.findMany({
//     where: {
//       title: {
//         contains: name,
//       },
//     },
//   });

//   // Filtrar los resultados para que sean insensibles a mayúsculas y minúsculas
//   const filteredResult = result.filter((games) =>
//     games.title.toLowerCase().includes(name)
//   );

//   return NextResponse.json(filteredResult);
// }
//// prueba dami
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import {data} from '../../data';

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("title").toLowerCase();

  // Buscar en la base de datos cualquier coincidencia
  const resultDB = await prisma.games.findMany({
    where: {
      title: {
        contains: name,
      },
    },
  });

  const resultData = data.filter(game => game.title.toLowerCase().includes(name));

  const result = [...resultDB, ...resultData];

  return NextResponse.json(result);
}
