import React from 'react';

const Chat = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', minHeight: '100vh' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                    <input type="text" placeholder="Type here" style={{ width: '90vw' }} className="input input-bordered" />
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </>
    );
};

export default Chat;
