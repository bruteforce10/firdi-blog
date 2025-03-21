"use client"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const { data: session } = useSession()

  return <>
  {session ? (
    <>
    <Link href="/write" className="md:text-sm text-md hover:text-primary">Write</Link>
    <button className="md:text-sm text-md cursor-pointer hover:text-primary" onClick={() => signOut()}>Sign Out</button>
  </>
  ) : (
    <Link href="/login" className="md:text-sm text-md hover:text-primary">Login/Register</Link>
  )}
  </>
};

export default AuthLink;

