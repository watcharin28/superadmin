"use client";

import { useState } from 'react';

import Navbar from './components/ui/Navbar';
import FullContainer from './components/ui/FullContainer';

// import Dashboard from './components/dashboard';
// import Meter from './components/meter';
// import Billing from './components/billing';
// import Tenant from './components/tenant';

export default function SuperAdminPage() {

    const [activeTab, setActiveTab] = useState(1);

    const renderComponent = () => {
        switch (activeTab) {
            case 1:
                return <Dashboard />;
            case 2:
                return ;
            case 3:
                return ;
            case 4:
                return ;
            default:
                return null;
        }
    };
    return (
        <FullContainer className="bg-white w-full">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab}>

            </Navbar>
            <div
                className="flex mt-6 justify-center items-center p-4 rounded-3xl w-full"
                style={{ 
                    backgroundColor: '#EDF1FF',
                    height: "94%",
                    width: '86%'
                 }}>
                {/* {renderComponent()} */}
            </div>
        </FullContainer>
    );
}
