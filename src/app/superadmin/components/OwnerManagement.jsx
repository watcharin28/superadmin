import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import OwnerCard from './OwnerCard';
import OwnerModal from './OwnerModal';

export default function OwnerManagement({ owners, setOwners }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // ฟังก์ชันเปิดโมดอลในโหมดแก้ไขข้อมูล
    const handleEditClick = (owner) => {
        console.log("ข้อมูลเจ้าของที่เลือก:", owner);
        setSelectedOwner(owner);
        setIsEditing(true);
        setIsModalVisible(true);
    };

    // ฟังก์ชันเปิดโมดอลเพื่อเพิ่มเจ้าของใหม่
    const handleAddClick = () => {
        setSelectedOwner({ 
            UserFirstname: '', 
            UserLastname: '', 
            username: '', 
            password: '', 
            role: 'Admin',  
            phone: '' 
        });
        setIsEditing(false);
        setIsModalVisible(true);
    };

    // ฟังก์ชันบันทึกข้อมูลเจ้าของ
    const handleSave = () => {
        console.log("ข้อมูลที่กำลังจะถูกบันทึก:", selectedOwner);
        if (isEditing) {
            setOwners(owners.map(owner => owner.id === selectedOwner.id ? selectedOwner : owner));
        } else {
            const newOwner = { ...selectedOwner, id: Date.now() };
            setOwners([...owners, newOwner]);
        }
        setIsModalVisible(false);
        setSelectedOwner(null);
    };

    // ฟังก์ชันลบเจ้าของ
    const handleDelete = (id) => {
        if (id) {
            console.log("ลบเจ้าของที่มี id:", id);
            setOwners(owners.filter(owner => owner.id !== id));
            setIsModalVisible(false);
            setSelectedOwner(null);
        }
    };

    // ฟังก์ชันกรองเจ้าของตามคำค้นหา
    const filteredOwners = owners.filter(owner => 
        `${owner.UserFirstname} ${owner.UserLastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( 
        <div className="min-h-screen w-full flex-col justify-start items-center p-5"> 
            <div className="bg-white w-full max-w-6xl h-[85vh] p-5 rounded-2xl shadow-lg">
                {/* ค้นหาและปุ่มเพิ่ม */}
                <div className="flex justify-between items-center mb-4">
                    <input 
                        type="text" 
                        placeholder="ค้นหาชื่อเจ้าของหอพัก..." 
                        className="border px-4 py-2 rounded-lg shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors"
                        onClick={handleAddClick}
                    >
                        <FaPlus /> เพิ่มเจ้าของหอพัก
                    </button>
                </div>

                {/* คอนเทนเนอร์การ์ด */}
                <div className="overflow-y-auto p-4 max-h-[70vh] min-h-[200px]">
                    <div className="flex flex-wrap justify-start  p-4">
                        {filteredOwners.length > 0 ? (
                            filteredOwners.map((owner) => (
                                <div key={owner.id} className="w-1/5 p-2">
                                    <OwnerCard
                                        owner={owner}
                                        onEdit={() => handleEditClick(owner)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center w-full">ไม่มีข้อมูลเจ้าของหอพัก</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal สำหรับแก้ไขข้อมูล */}
            {isModalVisible && (
                <OwnerModal
                    isEditing={isEditing}
                    owner={selectedOwner}
                    onClose={() => setIsModalVisible(false)}
                    onSave={handleSave}
                    onDelete={() => handleDelete(selectedOwner?.id)} 
                    setOwner={setSelectedOwner}
                />
            )}
        </div>
    );
}
