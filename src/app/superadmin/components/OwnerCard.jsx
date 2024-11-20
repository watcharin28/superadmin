import React from 'react';
import Image from 'next/image';

function OwnerCard({ owner, onEdit }) {
    return (
        <div
            className="font-noto-thai flex flex-col justify-between px-3 py-1 border border-black rounded-lg shadow-md h-60 text-xs"
            style={{
                width: "11.8rem"
            }}
        >
            <div className="section1 w-full h-2/6 flex items-center justify-center">
                <div className="w-6/12 h-5/6 flex justify-center items-center">
                    <Image src="/user.png" alt="User" width={70} height={40} />
                </div>
            </div>


            <div className="section2 w-full flex flex-col mt-2 text-center" style={{ fontSize: "9px" }}>
                <p className="text-xl font-bold text-[#4C4C4C]">{owner.UserFirstname} {owner.UserLastname}</p>
                <p className="text-gray-600">Username: {owner.username}</p>
                <p className="text-gray-600">Password: {owner.password}</p>
                <p className="text-gray-600">Phone: {owner.phone}</p>
            </div>

            <div className="section3 w-full h-1/6 flex justify-center items-center">
                <button
                    className="px-5 py-1 border border-white rounded-md bg-[#ab58ff] text-white"
                    onClick={onEdit} // เรียกใช้ onEdit โดยตรงเพื่อเปิด modal
                >
                    แก้ไข
                </button>
            </div>
        </div>
    );
}

export default OwnerCard;
