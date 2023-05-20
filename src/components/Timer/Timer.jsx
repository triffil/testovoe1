import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 60 /60);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <p>{formatTime(timer)}</p>
        </div>
    );
};

export default TimerComponent;