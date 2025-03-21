import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { PrismaClient } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
