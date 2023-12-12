import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { data } from "../../data";

export async function GET(request, { params }) {
  try {
    const games = await prisma.games.findUniqueOrThrow({
      where: {
        id: Number(params.id), // El number es para que lea el id ya que se ingresa como STR y se necesita en INT
      },
    });
    return NextResponse.json(games);
  } catch (error) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Id del juego no encontrado" });
    }
  }
}
