import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({

 publicRoutes: [
  '/',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing'
 ],
 ignoredRoutes:[
 
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing'
 ]
 
});


 //we want our users to visit specific routes even if the person is logged out
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};