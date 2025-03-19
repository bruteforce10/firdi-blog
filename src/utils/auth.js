import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

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
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnWrite = nextUrl.pathname.startsWith("/write");

      if (isOnWrite) {
        if (!isLoggedIn) return false;
        if (auth?.user?.role !== "ADMIN") return false;
        return true;
      }

      return true;
    },
  },
});
