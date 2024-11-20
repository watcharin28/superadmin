import React, { Component } from 'react';
import Image from 'next/image';

class TenantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardStates: {} // เก็บสถานะของแต่ละ card
        };
    }

    handleEdit = (CardId) => {
        this.setState((prevState) => ({
            cardStates: {
                ...prevState.cardStates,
                [CardId]: 1 // เปลี่ยนค่าเป็น 1 สำหรับ card ที่เลือก
            }
        }));
    };

    handleSubmit = (CardId) => {
        this.setState((prevState) => ({
            cardStates: {
                ...prevState.cardStates,
                [CardId]: 0 // เปลี่ยนค่าเป็น 0 สำหรับ card ที่เลือก
            }
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        // ตรวจสอบค่าของ cardState ทุกครั้งที่มีการเปลี่ยนแปลง
        if (prevState.cardStates !== this.state.cardStates) {
            console.log(this.state.cardStates);
        }
    }

    render() {
        const { room, buildingName } = this.props;
        const { cardStates } = this.state;
        const CardId = buildingName + room.roomNumber; // สร้าง CardId เฉพาะสำหรับแต่ละ card

        return (
            <div
                className="font-noto-thai flex flex-col justify-between px-3 py-1 border border-black rounded-lg shadow-md h-60 text-xs"
                style={{
                    width: "11.8rem"
                }}
            >
                <div className="section1 w-full h-2/6 flex items-center">
                    <div className="w-6/12 h-5/6"><Image src="/user.png" alt="User" width={70} height={40} /></div>
                    <div className="h-full w-6/12 flex flex-col">
                        <h3 className="flex flex-col items-center text-3xl font-bold text-[#4C4C4C]">
                            <span className='text-xs text-gray-500 relative top-1'
                                style={{
                                    fontSize: "9px"
                                }}
                            >ห้อง</span>
                            {room.roomNumber}
                        </h3>
                        <div className="flex w-full justify-around relative -top-2">
                            <p className="relative text-xl font-semibold text-[#4C4C4C] -top-4">
                                <span className='flex flex-col relative top-3'
                                    style={{
                                        fontSize: "8px"
                                    }}>ตึก</span>
                                {buildingName}
                            </p>

                            <p className="text-xl font-semibold text-[#4C4C4C] relative -top-4">
                                <span className='flex flex-col relative top-3'
                                    style={{
                                        fontSize: "9px"
                                    }}>ชั้น</span>
                                {room.floor}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section2 w-full flex flex-col mt-2 text-center" style={{ fontSize: "9px" }}>
                    <p className="text-xl font-bold text-[#4C4C4C]">{room.tenant}</p>
                    <p className="text-gray-600">เบอร์โทร: {room.phone}</p>
                    <p className="text-gray-600">Line: {room.line}</p>
                    <p className="text-gray-600">เริ่มสัญญา: {room.AgStartDATE}</p>
                    <p className="text-gray-600">สิ้นสุดสัญญา: {room.AgEndDATE}</p>
                </div>
                <div className="section3 W-full h-1/6 flex justify-center items-center">
                    {cardStates[CardId] !== 1 && (
                        <button
                            className="px-5 py-1 border border-white rounded-md bg-[#ab58ff] text-white"
                            onClick={() => this.handleEdit(CardId)}
                        >
                            แก้ไข
                        </button>
                    )}
                    {cardStates[CardId] === 1 && (
                        <div className="flex w-5/6 text-xs justify-around items-center"
                            style={{
                                fontSize: "9px"
                            }}
                            >
                            <button
                                className="px-5 py-1 border border-white rounded-md bg-[#ff2d2d] text-white"
                                onClick={() => this.handleEdit(CardId)}
                            >
                                ลบ
                            </button>
                            <button
                                className="px-4 py-1 border border-white rounded-md bg-[#f3c519] text-white"
                                onClick={() => this.handleSubmit(CardId)}
                            >
                                ยืนยัน
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TenantCard;