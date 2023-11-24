// import { NextResponse } from 'next/server';
// import  {prisma } from '@/libs/prisma';

// export async function PUT() {
//     const licenseActive =
  
//     const createLicense = await prisma.license.create({
//       data: {
//         name,
//         active,
//         game: {
//           connect: {
//             title: game,
//           },
//         },
//       },
//     });
  
//     return NextResponse.json(createLicense);
//   }

import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
export async function PUT(request) {
  const { userId, id } = await request.json();
 
  const existingLicense = await prisma.license.findFirst({
      where: { 
              id: id,
        },
    });
   
    if (!existingLicense) {
        return NextResponse.json({ error: 'Licencia no encontrada' });
    } else if (existingLicense){
        console.log(existingLicense)
        const { id, name } = existingLicense
        const userLicense = await prisma.license.update({
            where: {
                id: id
            },
            data: {
                userId: userId
            } 
        })
        return NextResponse.json(userLicense)
    }
}

