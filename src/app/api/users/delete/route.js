import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { userId } = await request.json();

  try {
    let data;
    if(userId) data = await clerkClient.users.deleteUser(userId);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
