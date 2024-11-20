import React from 'react';

export default function DormList({ dorms }) {
    return (
        <div className="w-full max-w-6xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dorms.map(dorm => (
                    <div key={dorm.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700">{dorm.name}</h3>
                        <p className='text-gray-700'>จำนวนห้อง: {dorm.rooms}</p>
                        <p className='text-gray-700'>ที่อยู่: {dorm.address}</p>
                        <p className='text-gray-700'>เจ้าของหอ: {dorm.owner}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
