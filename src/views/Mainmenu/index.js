import React, { useState } from 'react';
import Room from './components/room';

const Index = () => {
    const [rooms, setRooms] = useState([]);

    const createRoom = () => {
        // Mendapatkan nama ruangan dari input
        const roomName = document.getElementById('roomNameInput').value;

        // Membuat objek ruangan baru
        const newRoom = {
            name: roomName,
            id: Math.random().toString(), // Id unik untuk ruangan
        };

        // Menambahkan ruangan baru ke daftar ruangan
        setRooms([...rooms, newRoom]);

        // Mengosongkan input
        document.getElementById('roomNameInput').value = '';
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '20vh' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <input type="text" id="roomNameInput" placeholder="Room Name" className="input input-bordered w-full max-w-xs rounded-xl" />
                    <button className="btn btn-primary rounded-xl" onClick={createRoom}>Create Room</button>
                </div>
            </div>
            <h5 className="text-2xl" style={{ paddingLeft: '25px' }}>Available Rooms</h5>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {rooms.map((room) => (
                    <Room key={room.id} name={room.name} />
                ))}
            </div>
        </>
    );
}

export default Index;
