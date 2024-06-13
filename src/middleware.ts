import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher([
  // '/(.*)',
  '/upcoming(.*)',
  '/personalRoom(.*)',
  '/previous(.*)',
  '/recording(.*)',
  '/meeting(.*)',
]);
export default clerkMiddleware((auth, req)=>{
  isProtected(req) && auth().protect();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};