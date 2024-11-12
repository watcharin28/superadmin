"use client";

// import necessary libraries
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DisplayFormData from './display';

export default function RegisterPage() {

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1); // track form step

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',

    dormitoryname: '',

    buildings: [{
      buildingname: '',
      address1: '',
      address2: '',
      soi: '',
      road: '',
      subdistrict: '',
      district: '',
      province: 'กรุงเทพมหานครฯ',
      postalcode: '',
      numOfFloor: '',
      numOfRoomInFloor: ''
    }],
    // other form fields...
  });

  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    setTimestamp(Date.now()); // โหลดค่าหลังจาก component ถูก mount ในฝั่งไคลเอนต์แล้ว
  }, []);


  const [formValues, setFormValues] = useState({
    password: '',
    confirmpassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Check if all form fields have values
    // if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !formValues.confirmpassword || !formData.phone) {
    //   setErrorMessage("Please fill in all fields.");
    //   return;
    // }

    // // // Check if password and confirm password match
    // if (formData.password !== formValues.confirmpassword) {
    //   setErrorMessage("Passwords do not match.");
    //   return;
    // }

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
    setSuccessMessage("Register Successfully!");
    setTimeout(() => {
      router.push('/auth/login/adminlogin');
    }, 1000);
    // console.log("asdjla;sdjkasdkj");
    console.log(formData);
  };

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

  const handleBoth = (e) => {
    handlepass(e);
    handleInputChange(e);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle building changes
  const handleBuildingChange = (index, field, value) => {
    const newBuildings = [...formData.buildings];
    newBuildings[index][field] = value;
    setFormData({ ...formData, buildings: newBuildings });
  };

  // Add a new building
  const addBuilding = () => {
    setFormData({
      ...formData,
      buildings: [...formData.buildings, {
        buildingname: '',
        address1: '',
        address2: '',
        soi: '',
        road: '',
        subdistrict: '',
        district: '',
        province: 'กรุงเทพมหานครฯ',
        postalcode: '',
        numOfFloor: '',
        numOfRoomInFloor: ''
      }],
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Render form steps conditionally
  return (
    <div className="container flex justify-center items-top w-10/12 h-full font-noto-thai">
      <div className='container mx-auto py-5 flex flex-col justify-top items-center'>
        {currentStep === 1 && (
          <div className="flex flex-col justify-center w-5/12 text-xs">
            <h3>Step 1: Personal Information</h3>
            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black text-xs'
              type="text"
              placeholder='Enter your First name'
              name="firstname"
              onChange={handleInputChange}
            />
            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black'
              type="text"
              placeholder='Enter your Last name'
              name="lastname"
              onChange={handleInputChange}
            />
            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black'
              type="email"
              placeholder='Enter your email'
              name="email"
              onChange={handleInputChange}
            />
            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black'
              type="text"
              placeholder='Enter your phone number' // Phone number input
              name="phone"
              onChange={handleInputChange}
            />

            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black'
              type="password"
              placeholder='Enter your password'
              name="password"
              value={formValues.password}
              onChange={handleBoth}
            />
            <input
              className='block bg-gray-300 p-2 my-1 rounded-full text-black'
              type="password"
              placeholder='Confirm your password'
              name="confirmpassword"
              value={formValues.confirmpassword}
              onChange={handlepass}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex w-full justify-end">
              <button onClick={nextStep} className='bg-green-500 p-2 rounded-full text-white mt-3 w-28 right-0'>ถัดไป</button>
            </div>

            {/* <button type='submit' className='bg-green-500 p-2 rounded-md text-white mt-3'>Sign Up</button> */}
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex flex-col justify-center w-5/12 text-xs">
            <h3>Step 2: Dormitory Information</h3>
            <input
              className='block bg-gray-300 p-2 pl-3 my-1 rounded-full text-black text-xs'
              type="text"
              name="dormitoryname"
              placeholder="Dormitory Name"
              onChange={handleInputChange}
            />
            {formData.buildings.map((building, index) => (
              <div key={index} className="flex flex-col justify-center w-full text-xs mt-3">
                <h4>Information of Building {index + 1}</h4>
                <input
                  className='block bg-gray-300 p-1 pl-3 my-1 rounded-full text-black text-xs'
                  type="text"
                  // name="dormitoryname"
                  value={building.buildingname}
                  placeholder="Building Name"
                  onChange={(e) => handleBuildingChange(index, 'buildingname', e.target.value)}
                />
                <span className="flex w-full justify-start">
                  <input
                    className='block bg-gray-300 p-1 pl-3 my-1 rounded-full text-black w-6/12'
                    type="number"
                    placeholder="Number of Floors"
                    value={building.numOfFloor}
                    onChange={(e) => handleBuildingChange(index, 'numOfFloor', e.target.value)}
                  />
                  <input
                    className='block bg-gray-300 p-1 pl-3 my-1 rounded-full text-black w-6/12 ml-2 text-xs'
                    type="number"
                    placeholder="Rooms per Floor"
                    value={building.numOfRoomInFloor}
                    onChange={(e) => handleBuildingChange(index, 'numOfRoomInFloor', e.target.value)}
                  />
                </span>


                <h3 className="mt-3">Address Information</h3>
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black'
                  type="text"
                  placeholder="ที่อยู่ บ้านเลขที่"
                  value={building.address1}
                  onChange={(e) => handleBuildingChange(index, 'address1', e.target.value)}
                />
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black'
                  type="text"
                  placeholder="ที่อยู่ เพิ่มเติม (ถ้ามี)"
                  value={building.address2}
                  onChange={(e) => handleBuildingChange(index, 'address2', e.target.value)}
                />
                <span className="flex w-full justify-start">
                  <input
                    className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black w-6/12'
                    type="text"
                    placeholder="ซอย (ถ้ามี)"
                    value={building.soi}
                    onChange={(e) => handleBuildingChange(index, 'soi', e.target.value)}
                  />
                  <input
                    className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black w-6/12 ml-1'
                    type="text"
                    placeholder="ถนน (ถ้ามี)"
                    value={building.road}
                    onChange={(e) => handleBuildingChange(index, 'road', e.target.value)}
                  />
                </span>
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black'
                  type="text"
                  placeholder="แขวง"
                  value={building.subdistrict}
                  onChange={(e) => handleBuildingChange(index, 'subdistrict', e.target.value)}
                />
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black'
                  type="text"
                  placeholder="เขต"
                  value={building.district}
                  onChange={(e) => handleBuildingChange(index, 'district', e.target.value)}
                />
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black z-0'
                  type="text"
                  placeholder="กรุงเทพมหานครฯ"
                  value={building.province}
                  onChange={(e) => handleBuildingChange(index, 'province', e.target.value)}
                  readOnly
                />
                <input
                  className='block bg-gray-300 p-1.5 pl-3 my-1 rounded-full text-black z-0'
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  value={building.postalcode}
                  onChange={(e) => handleBuildingChange(index, 'postalcode', e.target.value)}
                />
              </div>
            ))}
            <button onClick={addBuilding} className="bg-blue-500 p-2 rounded-full text-white mt-2 mb-3">Add Building</button>

            <div className="flex w-full justify-between mb-10">
              <button onClick={prevStep} className='bg-yellow-500 p-2 rounded-full text-white mt-3 w-28 right-0'>กลับ</button>
              <button onClick={nextStep} className='bg-green-500 p-2 rounded-full text-white mt-3 w-28 right-0'>ถัดไป</button>
            </div>
            {/* <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button> */}
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col justify-center items-center w-7/12 text-xs">


            <DisplayFormData formData={formData} />

            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="flex w-full justify-between mb-10 text-xs">
              <button onClick={prevStep} className='bg-yellow-500 p-1 rounded-full text-white mt-3 w-24 right-0'>Back</button>
              <button type="submit" onSubmit={handleSubmit} className='bg-green-500 p-1 rounded-full text-white mt-3 w-24 right-0'>Submit</button>
            </form>

          </div>
        )}
      </div>
    </div>
  );
}


