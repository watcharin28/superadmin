"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });

  const [formValues, setFormValues] = useState({
    password: '',
    confirmpassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  console.log(formData)

  const handlepass = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === 'confirmpassword' || (name === 'password' && formValues.confirmpassword)) {
      // Check if passwords match
      if (value !== formValues.password && name === 'confirmpassword') {
        setErrorMessage("Passwords do not match");
      } else if (name === 'password' && value !== formValues.confirmpassword) {
        setErrorMessage("Passwords do not match");
      } else {
        setErrorMessage("");
      }
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBoth = (e) => {
    handlepass(e);
    handleChange(e);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const res = await fetch('http://127.0.0.1:5000/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    // alert(data.message);
    console.log(formData)
  };

  return (
    <div className="container flex justify-center items-top w-10/12 h-full">
      <div className='container mx-auto py-5 flex flex-col justify-top items-center'>
        <h3>User Register</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>
          <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your First name' name="firstname" onChange={handleChange} />
          <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your Last name' name="lastname" onChange={handleChange} />
          <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' name="username" onChange={handleChange} />

          <input
            className='block bg-gray-300 p-2 my-2 rounded-md'
            type="password"
            placeholder='Enter your password'
            name="password"
            value={formValues.password}
            onChange={handleBoth}
          />
          <input
            className='block bg-gray-300 p-2 my-2 rounded-md'
            type="password"
            placeholder='Confirm your password'
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handlepass}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign Up</button>
        </form>
        <p className='mt-6'>
          Alredy have an account? go to <Link href="/auth/login/userlogin" className='text-blue-200'> Login </Link> Page
        </p>
      </div>
    </div>
  );
}

// export default RegisterPage;
