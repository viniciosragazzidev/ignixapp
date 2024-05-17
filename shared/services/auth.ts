import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";

import { compareSync } from "bcrypt-ts";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          return null;
        }

        const user = await db.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!user) {
          return null;
        }

        const isPasswordValid = compareSync(password, user.password!);

        if (!isPasswordValid) {
          return null;
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        (session.user.id = token.userId),
          (session.user.name = token.name),
          (session.user.email = token.email! as string),
          (session.user.image = token.picture),
          (session.user.role = token.role);
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email!,
        },
      });
      if (!dbUser) {
        token.id = user!.id;
        return null;
      }
      const data = {
        userId: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.role,
      };
      return data;
    },
    async signIn({ account, user, credentials, email, profile }) {
      // cookies().set("userId", user!.id || "", {
      //   expires: Date.now() + 5000,
      // });

      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
