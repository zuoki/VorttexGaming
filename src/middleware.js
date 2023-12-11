// import { authMiddleware } from '@clerk/nextjs';

// export default authMiddleware({
// 	publicRoutes: ['/', '/details', '/details/:id', '/api/users', '/api/users/:id'],
// 	ignoredRoutes: ['/(api/games)(.*)','/api/license', '/api/userLicense', '/api/sendEmail', '/api/webhook', "/api/users/username"] // Utiliza .* para representar cualquier cadena de caracteres.
// });

// export const config = {
// 	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

// Archivo de middleware
import { authMiddleware } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";

async function isAdmin(req) {
  // Accede a la sesión de Clerk
  const session = await req.session();

  // Accede a los datos públicos del usuario
  const user = await prisma.user.findUnique({
    where: { user_id: session.id },
  });

  // Verifica si el usuario tiene el rol de administrador
  return user.role === "ADMIN";
}

export default authMiddleware({
  publicRoutes: [
    "/",
    "/details",
    "/details/:id",
    "/api/users",
    "/api/users/:id",
  ],
  ignoredRoutes: [
    "/(api/games)(.*)",
    "/api/license",
    "/api/userLicense",
    "/api/sendEmail",
    "/api/webhook",
    "/api/users/username",
  ], // Utiliza .* para representar cualquier cadena de caracteres.
  requireAdminRoutes: ["/panelAdmin"], // Rutas que requieren ser administrador
  onUnauthorized: (req, res) => {
    res.status(401).send("No estás autorizado para acceder a esta ruta");
  },
  onAdminRequired: (req, res) => {
    res
      .status(403)
      .send("Se requiere ser administrador para acceder a esta ruta");
  },
  clerkVerifyOptions: {
    onVerified: async (req, res, next) => {
      if (req.requireAdminRoutes.includes(req.path) && !(await isAdmin(req))) {
        return onAdminRequired(req, res);
      }
      next();
    },
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
