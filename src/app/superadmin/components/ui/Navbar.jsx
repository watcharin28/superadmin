import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className='w-40 h-full flex flex-col justify-between items-center bg-white text-[#9747FF] pb-16'>
      <div className="w-full flex flex-col items-center">
        <div className="logo mt-6 font-extrabold text-3xl">
          EzPay
        </div>
        <div className="flex flex-col gap-1 mt-6 w-full items-center text-[#4700a2] text-xs font-bold font-noto-thai">
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-3 rounded-md ${activeTab === 1 ? 'ml-4 bg-[#EDF1FF] font-black hover:bg-[#EDF1FF] w-full' : 'bg-white hover:bg-[#f9faff] rounded-md w-11/12'}`}
          >
            DASHBOARD
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-3 rounded-md ${activeTab === 2 ? 'ml-4 bg-[#EDF1FF] font-black hover:bg-[#EDF1FF] w-full' : 'bg-white hover:bg-[#f9faff] rounded-md w-11/12'}`}
          >
            จัดการเจ้าของหอพัก
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`px-4 py-3 rounded-md ${activeTab === 3 ? 'ml-4 bg-[#EDF1FF] font-black hover:bg-[#EDF1FF] w-full' : 'bg-white hover:bg-[#f9faff] rounded-md w-11/12'}`}
          >
            ดูรายการหอพัก
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center text-[#4700a2]">
        <div className="user flex">
          <div className="imgBox w-9 h-9 mr-2">
            <Image src="/user.png" alt="User" width={40} height={40} />
          </div>
          <div className="UserName font-noto-thai">
            <h3 id="UserRes" className="text-sm font-bold">Watcharin</h3>
            <p className="text-xs">Superadmin</p>
          </div>
        </div>
        <div className="logOut mt-4 flex font-bold w-11/12 pl-3 p-2 hover:bg-[#EDF1FF] rounded-md cursor-pointer">
          <Image src="/exit.png" alt="User" width={16} height={1} />
          <h3 className="ml-2 text-xs">Log Out</h3>
        </div>
      </div>
    </nav>
  )
}
