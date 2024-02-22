import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define paths that are public (accessible without authentication)
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/study';

    const token = await request.cookies.get('token')?.value || '';

    if (!isPublicPath && !token) {
        // Redirect to the login page if trying to access a protected route without a token
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    // Continue to the next middleware or handler
    return NextResponse.next();
}

export const config = {
    // Define the paths that should be protected by the middleware
    matcher: [
        '/',
        '/tips',
        '/about',
        '/study',
    ]
};