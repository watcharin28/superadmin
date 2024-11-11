'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        const data = await res.json();

        // เก็บ JWT token ลงใน localStorage
        // localStorage.setItem('token', data.access_token);
        setCookie('authToken', data.access_token, 7);

        // Redirect ไปที่หน้า dashboard พร้อม user_id ใน query parameter
        router.push(`/dashboard?user_id=${data.id}`);
      } else {
        // ถ้าเกิดข้อผิดพลาดจากเซิร์ฟเวอร์ ให้ดึงข้อความ error
        const data = await res.json();
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="container flex justify-center items-top w-10/12 h-full">
      <div className="container mx-auto py-5 flex flex-col justify-top items-center">
        <h1 className="mb-5">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col justify-center items-between w-5/12">
          <input
            className="block bg-gray-300 p-2 my-0 rounded-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white mt-3"
          >
            Sign In
          </button>
        </form>
        <hr className='my-3' />
        <p className='mt-6'>
          Don't have an account? Go to <Link href="/auth/register/userregister" className='text-blue-200'> Register </Link> page.
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}
