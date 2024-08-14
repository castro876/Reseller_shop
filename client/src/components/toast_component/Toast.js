import React, { useState, useEffect } from 'react';

const Toast = ({ message, show, duration = 1000, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    return (
        <div className={`toast ${show ? 'show' : ''}`}>
            <div className='text-center show'>
            {message}
            </div>
        </div>
    );
};

export default Toast;
