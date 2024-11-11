"use client";

import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log(token)
    fetch('http://127.0.0.1:5000/protected', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Access denied'));
  }, []);

  return <h1>{message}</h1>;
}
