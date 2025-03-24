import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import clientPromise from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
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
    async jwt({ token, user }) {
      const client = await clientPromise;
      const db = client.db();

      if (user) {
        const existingUser = await db
          .collection("users")
          .findOne({ email: user.email });

        if (existingUser) {
          token.role = existingUser.role || "USER";
        } else {
          token.role = "USER";
          await db.collection("users").insertOne({
            _id: user.id,
            email: user.email,
            role: "USER",
          });
        }
      }
      return token;
    },
  },
  async session({ session, token }) {
    session.user.role = token.role;
    return session;
  },
});
