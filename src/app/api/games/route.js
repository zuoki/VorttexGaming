import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { data } from ".././data";

export async function GET() {
  const games = await prisma.games.findMany();
  const allData = games;
  const allDataSorted = allData.sort((a, b) => a.id - b.id);
  return NextResponse.json(allDataSorted);
}
export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const newGame = await prisma.games.create({ data });
  return NextResponse.json(newGame);
}

export async function PUT(request) {
  const data = await request.json();
  const updateGame = await prisma.games.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(updateGame);
}
//ruta delete funcional.
export async function DELETE(request) {
  const data = await request.json();
  const deletedGame = await prisma.games.delete({
    where: { id: data.id },
  });

  return NextResponse.json(deletedGame);
}
