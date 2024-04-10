import { NextResponse } from "next/server";
// import { kv } from "@vercel/kv";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /_next (Next.js internals)
     * 2. /_static (inside /public)
     * 3. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
export default async function middleware(req) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers
    .get("host")
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // special case for Vercel preview deployment URLs
  if (
    hostname.includes("---") &&
    hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
  ) {
    console.log("Vercel preview deployment URL", hostname);
    hostname = `${hostname.split("---")[0]}.${
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
    }`;
  }

  const path = `${url.pathname}`;
  const tailwind = "kshetez_vinayak_tailwind_resume";
  const sphereai = "kshetez_vinayak_sphereai_resume";
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  // rewrites for app pages
  console.log("hostname", hostname);
  if (hostname == `${sphereai}.${rootDomain}`) {
    console.log("links subdomain");
    return NextResponse.rewrite(new URL(`/sphereai`, req.url));
  } else if (hostname == `${tailwind}.${rootDomain}`) {
    console.log("resume subdomain");
    return NextResponse.rewrite(new URL(`/tailwind`, req.url));
  }
  // else if (path.includes("/auth")) {
  //   console.log("redirecting to ", new URL(path, urlBase));
  //   return NextResponse.redirect(new URL(path, urlBase));
  // }

  return NextResponse.next();
}
