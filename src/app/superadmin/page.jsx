"use client";
import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import FullContainer from './components/ui/FullContainer';
import Dashboard from './components/Dashboard';
import OwnerManagement from './components/OwnerManagement';
import DormList from './components/DormList';

export default function SuperAdminPage() {
    // ข้อมูลม็อกอัปสำหรับ owners
    const [owners, setOwners] = useState([
        {
            id: 1,
            UserFirstname: 'John',
            UserLastname: 'Doe',
            username: 'johndoe',
            password: 'pass1234',
            role: 'Admin',
            phone: '0912345678'
        },
        {
            id: 2,
            UserFirstname: 'Jane',
            UserLastname: 'Smith',
            username: 'janesmith',
            password: 'password123',
            role: 'Admin',
            phone: '0812345678'
        },
        {
            id: 3,
            UserFirstname: 'Alice',
            UserLastname: 'Brown',
            username: 'aliceb',
            password: 'alice123',
            role: 'Admin',
            phone: '0712345678'
        },
        {
            id: 4,
            UserFirstname: 'Alice',
            UserLastname: 'Brown',
            username: 'aliceb',
            password: 'alice123',
            role: 'Admin',
            phone: '0712345678'
        },
        {
            id: 5,
            UserFirstname: 'Alice',
            UserLastname: 'Brown',
            username: 'aliceb',
            password: 'alice123',
            role: 'Admin',
            phone: '0712345678'
        },
        {
            id: 6,
            UserFirstname: 'Alice',
            UserLastname: 'Brown',
            username: 'aliceb',
            password: 'alice123',
            role: 'Admin',
            phone: '0712345678',
            
        }
    ]);

    const [dorms, setDorms] = useState([
        { id: 1, name: 'Dorm A', rooms: 40, address: '123 Main St', owner: 'willsmith' },
        { id: 2, name: 'Dorm B', rooms: 30, address: '456 Second St', owner: 'janedoe' },
        { id: 3, name: 'Dorm C', rooms: 20, address: '789 Third St', owner: 'johndoe' }
    ]);

    const [activeTab, setActiveTab] = useState(1);

    // ฟังก์ชัน renderComponent เพื่อเลือกคอมโพเนนต์ที่จะแสดงตามแท็บที่เลือก
    const renderComponent = () => {
        switch (activeTab) {
            case 1:
                return <Dashboard />;
            case 2:
                return <OwnerManagement owners={owners} setOwners={setOwners} />;
            case 3:
                return <DormList dorms={dorms} />;
            default:
                return null;
        }
    };

    return (
        <FullContainer className="bg-white w-full">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div
                className="flex mt-6 justify-start items-start p-4 rounded-3xl w-full"
                style={{
                    backgroundColor: '#EDF1FF',
                    height: "94%",
                    width: '86%'
                }}
            >
                {renderComponent()}
            </div>
        </FullContainer>
    );
}
