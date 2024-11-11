// components/RoomCard.jsx

import './roomcard.css';

const RoomCard = ({ room, onClick }) => {

    // เลือกคลาสตามสถานะ
    let cardClass = '';

    if (room.status === 'Paid') {
        cardClass = 'card-paid';
    } else if (room.status === 'Unpaid') {
        cardClass = 'card-unpaid';
    } else if (room.status === 'Vacant') {
        cardClass = 'card-vacant';
    } else {
        cardClass = 'card-billing';
    }

    return (
        <div
            className={`card font-extrabold text-xl flex flex-col justify-around ${cardClass}`}
            key={room.roomNumber}
            style={{
                backgroundColor:
                    room.status === 'Paid'
                        ? '#67EA56'
                        : room.status === 'Unpaid'
                            ? '#FF6565'
                            : room.status === 'Vacant'
                            ? '#FFE386'
                            : '#E5C5FF',

            }}
            onClick={() => onClick(room)}
        >
            <h4 className="font-noto-thai font-black text-2xl z-10"
                style={{
                    fontWeight:'900'
                }}
            >{room.roomNumber}
            </h4>
            <p className="text-base font-noto-thai z-10">{room.tenant}</p>
            <p className="font-noto-thai z-10 text-base">{room.status === 'Paid' ? 'ชำระแล้ว' : room.status === 'Unpaid' ? 'ยังไม่ชำระ' : room.status === 'Vacant' ? 'ห้องว่าง' : 'ออกบิลแล้ว'}</p>
        </div>
    );
};

export default RoomCard;
