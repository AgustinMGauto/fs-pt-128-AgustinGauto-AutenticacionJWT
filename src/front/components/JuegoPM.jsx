import React from 'react';
import Pacman from 'react-pacman';

export const JuegoPM = () => {

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '50px'
            }}>
                <div style={{
                    padding: '10px',
                    border: '4px solid #2980b9',
                    borderRadius: '8px',
                    background: '#000',
                    boxShadow: '0 0 20px #2980b9'
                }}>
                    <Pacman />
                </div>
            </div>
        </>
    );
};
