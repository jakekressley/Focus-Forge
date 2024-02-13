import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // define paths that are public (accessible without authentication)
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

    const token = await request.cookies.get('token')?.value || ''

    /*
    const response = NextResponse.json({
        message: "Login successful",
        success:true,
        token: token,
    })
    */

    /*
    response.cookies.set("token", token, {
        httpOnly: true,
    })
    */
    // wait for cookies request
    // redirect logic based on path and if they have token
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    // I think the problem is that it is doing this too fast
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/tips',
        '/about',
        '/login',
        '/signup',
        '/verifyemail',
        '/study',
    ]
}