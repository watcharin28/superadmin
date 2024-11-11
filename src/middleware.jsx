// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('authToken'); // ดึง JWT จาก cookies

  // ถ้าไม่มี token ให้ redirect ไปหน้า login
  if (!token) {
    console.log("Plese login before!")
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ในขั้นตอนนี้ เราไม่ได้ใช้การตรวจสอบที่ซับซ้อนของ JWT
  // เพียงแค่มี token ใน cookies ก็ให้ผ่านได้
  return NextResponse.next();
}

// ใช้ middleware กับเส้นทางที่ต้องการจำกัดสิทธิ์
export const config = {
  matcher: ['/dashboard/:path*', '/protected/:path*'],
};
