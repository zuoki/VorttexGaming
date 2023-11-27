import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { data } from "../../data";

// export async function GET(request, { params }) {
//   try {
//     const games = await prisma.games.findUniqueOrThrow({
//       where: {
//         id: Number(params.id), // El number es para que lea el id ya que se ingresa como STR y se necesita en INT
//       },
//     });
//     return NextResponse.json(games);
//   } catch (error) {
//     if (error.code === "P2025") {
//       console.log("Id del juego no encontrado");
//       return NextResponse.json({ error: "Id del juego no encontrado" });
//     }
//   }
// }

export async function GET(request, { params }) {
  try {
    const id = Number(params.id); // El number es para que lea el id ya que se ingresa como STR y se necesita en INT

    // Buscar en los datos importados cualquier coincidencia
    const resultData = data.filter((game) => game.id === id);

    const result = [...resultData];

    if (result.length === 0) {
      console.log("Id del juego no encontrado");
      return NextResponse.json({ error: "Id del juego no encontrado" });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Ocurrió un error al buscar el juego" });
  }
}
