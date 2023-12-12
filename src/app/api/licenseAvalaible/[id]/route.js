import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request,  { params }) {

    const  id  =  Number(params.id);
    const availableGame = await prisma.license.findMany({
      where: {
        active: true,
        game: {
            id: id
          }
      }
    });
    if (availableGame.length > 0) {
        return new Response(availableGame.length, { status: 200 })
    }
    return NextResponse.json({ error: "No tenemos stock del juego" }, {status: 404});
}