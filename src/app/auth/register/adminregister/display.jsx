import React from 'react';

function DisplayFormData({ formData }) {
    return (
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">ข้อมูลที่กรอก</h2> */}
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">ยืนยันการสมัครสมาชิก</h1>

            <div className="mb-3">
                <p className="text-gray-600 mb-2"><span className="font-semibold">ชื่อ:</span> {formData.firstname}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">นามสกุล:</span> {formData.lastname}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">อีเมล:</span> {formData.email}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">เบอร์โทรศัพท์:</span> {formData.phone}</p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-700">หอพัก</h3>
            <p className="text-gray-600 mb-3"><span className="font-semibold">ชื่อหอพัก:</span> {formData.dormitoryname}</p>


            {formData.buildings.map((building, index) => (
                <div key={index} className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">อาคารที่ {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-600"><span className="font-semibold">ชื่ออาคาร:</span> {building.buildingname}</p>
                        <p className="text-gray-600"><span className="font-semibold">ที่อยู่ 1:</span> {building.address1}</p>
                        <p className="text-gray-600"><span className="font-semibold">ที่อยู่ 2:</span> {building.address2}</p>
                        <p className="text-gray-600"><span className="font-semibold">ซอย:</span> {building.soi}</p>
                        <p className="text-gray-600"><span className="font-semibold">ถนน:</span> {building.road}</p>
                        <p className="text-gray-600"><span className="font-semibold">แขวง/ตำบล:</span> {building.subdistrict}</p>
                        <p className="text-gray-600"><span className="font-semibold">เขต/อำเภอ:</span> {building.district}</p>
                        <p className="text-gray-600"><span className="font-semibold">จังหวัด:</span> {building.province}</p>
                        <p className="text-gray-600"><span className="font-semibold">รหัสไปรษณีย์:</span> {building.postalcode}</p>
                        <p className="text-gray-600"><span className="font-semibold">จำนวนชั้น:</span> {building.numOfFloor}</p>
                        <p className="text-gray-600"><span className="font-semibold">จำนวนห้องต่อชั้น:</span> {building.numOfRoomInFloor}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayFormData;