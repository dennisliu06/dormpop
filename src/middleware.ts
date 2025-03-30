import authConfig from "@/auth.config"
import NextAuth from "next-auth"

import {
    publicRoutes,
    privateRoutes,
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req: any) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth
   
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute) return;

    if (isAuthRoute) {
        if (isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT), nextUrl)
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/login", nextUrl));
    } 

    if (isLoggedIn && isPublicRoute) {
        return Response.redirect(new URL("/home", nextUrl));
    }

    // TODO: Invoke middleware on the new pages of the site like product pages, shopping, etc.

    return;

})

export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }