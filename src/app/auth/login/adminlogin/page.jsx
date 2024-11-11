"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำการเปลี่ยนเส้นทางไปยังหน้าใหม่ เช่น /dashboard
    router.push('/dashboard');
  };

  return (
    <div className="container flex justify-center items-top w-10/12 h-full">
      <div className='container mx-auto py-5 flex flex-col justify-top items-center'>
        <h3>Admin Login</h3>
        <hr className='my-3'/>
        <form onSubmit={handleSubmit}>
          <input
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white"
          >
            Sign Up
          </button>
        </form>
        <hr className='my-3'/>
        <p className='mt-6'>
          Don't have an account? Go to <Link href="/auth/register/adminregister" className='text-blue-200'> Register </Link> page.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
