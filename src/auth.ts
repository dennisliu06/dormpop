import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { getUserById } from "../data/user"
import { db } from "../lib/db"
import authConfig from "@/auth.config"

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
    } & DefaultSession["user"]
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    /*async signIn({ user }) {
      
      if (!user.id) return false

      const existingUser = await getUserById(user.id)

      if (!existingUser || !existingUser.emailVerified) return false;

      return true;
    },*/
    async session({ token, session }) {
      
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.firstName && session.user) {
        session.user.firstName = token.firstName as string;
      }

      if (token.lastName && session.user) {
        session.user.lastName = token.lastName as string;
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      
      const existingUser = await getUserById(token.sub);
      
      if (!existingUser) return token; 

      token.firstName = existingUser.first_name
      token.lastName = existingUser.last_name
      
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})