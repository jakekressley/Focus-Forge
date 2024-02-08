import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // define paths that are public (accessible without authentication)
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

    const token = request.cookies.get('token')?.value || ''

    // redirect logic based on path and if they have token
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/tree',
        '/login',
        '/signup',
        '/verifyemail',
        '/study',
    ]
}