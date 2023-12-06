import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { data } from "../../data";

export async function GET({ params }) {
//   try {
    const id = Number(params.id); // El number es para que lea el id ya que se ingresa como STR y se necesita en INT

    // Buscar en los datos importados cualquier coincidencia
    const resultData = data.filter((game) => game.id === id);

    const result = [...resultData];

    if (result.length === 0) {
      console.log("Id del de usuario no encontrado");
      return NextResponse.json({ error: "Id del de usuario no encontrado"});
    }

    return NextResponse.json(result);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: "Ocurrió un error al buscar el juego" });
//   }
}
