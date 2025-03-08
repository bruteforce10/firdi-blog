import Link from "next/link";
const AuthLink = () => {
    const status = "unauthenticated";
  return <>
  {status === "unauthenticated" ? (
    <Link href="/login" className="text-sm hover:text-primary">Login</Link>
  ) : (
  <>
    <Link href="/write" className="text-sm hover:text-primary">Write</Link>
    <span className="text-sm cursor-pointer hover:text-primary">Logout</span>
  </>
  )}
  </>
};

export default AuthLink;

