"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: ''
  });

  const [formValues, setFormValues] = useState({
    password: '',
    confirmpassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBoth = (e) => {
    handlepass(e);
    handleChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all form fields have values
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !formValues.confirmpassword || !formData.phone) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formValues.confirmpassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear error message if all fields are filled and passwords match
    setErrorMessage("");

    // Uncomment and use this code to make the actual API request
    // const res = await fetch('http://127.0.0.1:5000/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    // alert(data.message);
    setSuccessMessage("Register Successfully!")
    setTimeout(() => {
      router.push('/auth/login/userlogin');
    }, 1000);

    console.log(formData);
  };

  return (
    <div className="container flex justify-center items-top w-10/12 h-full">
      <div className='container mx-auto py-5 flex flex-col justify-top items-center'>
        <h3>User Register</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-between w-5/12">
          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="text"
            placeholder='Enter your First name'
            name="firstname"
            onChange={handleChange}
          />
          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="text"
            placeholder='Enter your Last name'
            name="lastname"
            onChange={handleChange}
          />
          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="email"
            placeholder='Enter your email'
            name="email"
            onChange={handleChange}
          />
          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="text"
            placeholder='Enter your phone number' // Phone number input
            name="phone"
            onChange={handleChange}
          />

          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="password"
            placeholder='Enter your password'
            name="password"
            value={formValues.password}
            onChange={handleBoth}
          />
          <input
            className='block bg-gray-300 p-2 my-1 rounded-md text-black'
            type="password"
            placeholder='Confirm your password'
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handlepass}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <button type='submit' className='bg-green-500 p-2 rounded-md text-white mt-3'>Sign Up</button>
        </form>
        <p className='mt-6'>
          Already have an account? Go to <Link href="/auth/login/userlogin" className='text-blue-200'>Login</Link> Page
        </p>
      </div>
    </div>
  );
}
