export { auth as middleware } from "@/utils/auth";

export const config = {
  matcher: ["/dashboard/:path*"],
  runtime: "nodejs",
};
