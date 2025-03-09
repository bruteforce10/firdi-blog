"use client"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const { data: session } = useSession()

  return <>
  {session ? (
    <>
    <Link href="/write" className="text-sm hover:text-primary">Write</Link>
    <button className="text-sm cursor-pointer hover:text-primary" onClick={() => signOut()}>Sign Out</button>
  </>
  ) : (
    <Link href="/login" className="text-sm hover:text-primary">Login</Link>
  )}
  </>
};

export default AuthLink;

