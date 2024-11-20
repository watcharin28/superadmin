import { FaTimes } from 'react-icons/fa';

export default function OwnerModal({ isEditing, owner, onClose, onSave, onDelete, setOwner }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
           <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto relative">
                <button
                    className="absolute top-2 right-2 text-gray-800 hover:text-gray-800"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <h3 className="text-2xl font-semibold mb-4">{isEditing ? 'แก้ไขข้อมูลเจ้าของหอ' : 'เพิ่มเจ้าของหอใหม่'}</h3>

                <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
                    <div className="mb-4">
                        <label className="block text-gray-700">firstname</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.UserFirstname || ''}
                            onChange={(e) => setOwner({ ...owner, UserFirstname: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">lastname</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.UserLastname || ''}
                            onChange={(e) => setOwner({ ...owner, UserLastname: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.username || ''}
                            onChange={(e) => setOwner({ ...owner, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.password || ''}
                            onChange={(e) => setOwner({ ...owner, password: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">role</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.role || ''}
                            onChange={(e) => setOwner({ ...owner, role: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">เบอร์โทรศัพท์</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700"
                            value={owner?.phone || ''}
                            onChange={(e) => setOwner({ ...owner, phone: e.target.value })}
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        {isEditing && (
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600"
                                onClick={() => {
                                    onDelete(owner.id);
                                    onClose();
                                }}
                            >
                                ลบ
                            </button>
                        )}

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:bg-green-600"
                        >
                            {isEditing ? 'บันทึกการแก้ไข' : 'เพิ่ม'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
