import React from 'react'

import { useState } from 'react';
import Container from './ui/Container';
import RoomCard from './ui/roomcard';

export default function Dashboard() {
    const data = {
        "buildings": [
            {
                "name": "A",
                "floors": [
                    {
                        "name": "F1",
                        "rooms": [
                            { "roomNumber": "101", "tenant": "Will Smith", "status": "Paid" },
                            { "roomNumber": "102", "tenant": "Farlos", "status": "Paid" },
                            { "roomNumber": "103", "tenant": "OHM", "status": "Unpaid" },
                            { "roomNumber": "104", "tenant": "Anna", "status": "Paid" },
                            { "roomNumber": "105", "tenant": "Ben", "status": "Unpaid" },
                            { "roomNumber": "106", "tenant": "Charlie", "status": "Paid" },
                            { "roomNumber": "107", "tenant": "Diana", "status": "Unpaid" },
                            { "roomNumber": "108", "tenant": "Eli", "status": "Paid" },
                            { "roomNumber": "109", "tenant": "-", "status": "Vacant" },
                            { "roomNumber": "110", "tenant": "George", "status": "Paid" },
                            { "roomNumber": "111", "tenant": "Hannah", "status": "Unpaid" },
                            { "roomNumber": "112", "tenant": "Ian", "status": "Paid" },
                            { "roomNumber": "113", "tenant": "Ian", "status": "Paid" },
                            { "roomNumber": "114", "tenant": "-", "status": "Vacant" }
                        ]
                    },
                    {
                        "name": "F2",
                        "rooms": [
                            { "roomNumber": "204", "tenant": "Farlos", "status": "Paid" },
                            { "roomNumber": "205", "tenant": "-", "status": "Vacant" }
                        ]
                    },
                    {
                        "name": "F3",
                        "rooms": [
                            { "roomNumber": "304", "tenant": "Farlos", "status": "Paid" },
                            { "roomNumber": "305", "tenant": "-", "status": "Vacant" }
                        ]
                    }
                ]
            },
            {
                "name": "B",
                "floors": [
                    {
                        "name": "F1",
                        "rooms": [
                            { "roomNumber": "101", "tenant": "Will Smith", "status": "Billing" },
                            { "roomNumber": "102", "tenant": "Farlos", "status": "Billing" },
                            { "roomNumber": "103", "tenant": "OHM", "status": "Unpaid" }
                        ]
                    },
                    {
                        "name": "F2",
                        "rooms": [
                            { "roomNumber": "104", "tenant": "Farlos", "status": "Paid" },
                            { "roomNumber": "105", "tenant": "-", "status": "Vacant" }
                        ]
                    },
                    {
                        "name": "F3",
                        "rooms": [
                            { "roomNumber": "104", "tenant": "Farlos", "status": "Paid" },
                            { "roomNumber": "105", "tenant": "-", "status": "Vacant" }
                        ]
                    }
                ]
            }
        ]
    };

    const [selectedBuilding, setSelectedBuilding] = useState(data.buildings[0].name); // Default to the first building
    const [selectedFloor, setSelectedFloor] = useState(data.buildings[0].floors[0].name); // Default to the first floor

    // Get the selected building and floor
    const building = data.buildings.find(b => b.name === selectedBuilding);
    const floor = building?.floors.find(f => f.name === selectedFloor);

    return (
        <div className="flex flex-col w-full h-full justify-start p-0">
            <div 
                className="flex justify-between items-center w-full h-40 rounded-xl"
                style={{
                    height:'20%'
                }}>
                <div className="h-full w-3/12 bg-white rounded-xl mr-2">

                </div>
                <div className="h-full w-3/12 bg-white rounded-xl mr-2">

                </div>
                <div className="h-full w-3/12 bg-white rounded-xl mr-2">

                </div>
                <div className="h-full w-4/12 bg-white rounded-xl">

                </div>
            </div>
            <div 
                className="p-5 mt-2 flex flex-col justify-start items-start bg-[#ffffff] w-full h-5/6 rounded-xl"
                style={{
                    height:'80%'
                }}>
                <div className="flex mb-3 h-7">
                    {/* Building Tabs */}
                    <div className="flex mr-6 bg-[#CD8BFF] rounded-md">
                        {data.buildings.map((b) => (
                            <button
                                className="py-0 p-5 text-xs rounded-md hover:bg-[#EDF1FF]"
                                key={b.name}
                                onClick={() => {
                                    setSelectedBuilding(b.name);
                                    setSelectedFloor(b.floors[0]?.name); // Default to the first floor of the selected building
                                }}
                                style={{
                                    // padding: '0.5rem 0.5rem',
                                    backgroundColor: b.name === selectedBuilding ? '#9747FF' : '#CD8BFF',
                                    color: b.name === selectedBuilding ? '#fff' : '#fff'
                                }}
                            >
                                {b.name}
                            </button>
                        ))}
                    </div>

                    {/* Floor Tabs */}
                    {building && (
                        <div className="flex bg-[#CD8BFF] rounded-md p-0">
                            {building.floors.map((f) => (
                                <button
                                    className="py-0 p-4 text-xs rounded-md"
                                    key={f.name}
                                    onClick={() => setSelectedFloor(f.name)}
                                    style={{
                                        // padding: '0.5rem 1rem',
                                        backgroundColor: f.name === selectedFloor ? '#9747FF' : '#CD8BFF',
                                        color: f.name === selectedFloor ? '#fff' : '#ffffff'
                                    }}
                                >
                                    {f.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Room Cards */}
                <div
                    className="w-full overflow-y-scroll" 
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', height: '90%'}}>
                    {floor?.rooms.map((room) => (
                        <RoomCard key={room.roomNumber} room={room} onClick={() => console.log(room)} />
                    ))}
                </div>
            </div>
        </div>

    );
}
