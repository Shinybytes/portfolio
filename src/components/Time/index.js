import './time.scss'
import React, { useState, useEffect } from 'react';


const Time = () => {
    const [timeSinceStart, setTimeSinceStart] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Startdatum
        const startDate = new Date('2022-09-01T00:00:00Z');

        const updateCountdown = () => {
            const currentTime = new Date();
            const difference = Math.floor((currentTime - startDate) / 1000);

            const days = Math.floor(difference / (60 * 60 * 24));
            const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((difference % (60 * 60)) / 60);
            const seconds = Math.floor(difference % 60);

            setTimeSinceStart({ days, hours, minutes, seconds });
        };

        // Interval Zähler
        const intervalId = setInterval(updateCountdown, 1000);

        // Initialen Countdown
        updateCountdown();

        // Interval aufräumen
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div class="Timer-container">
            <div class="Timer">
                <h2 class="Überschrifttimer">MEINE REISE STARTETE:</h2>
                <div class="timecontainer">

                    <p class="Zeit">
                        {timeSinceStart.days} Tage
                    </p>
                    <p class="Zeit">
                        {timeSinceStart.hours} Stunden
                    </p>
                    <p class="Zeit">
                        {timeSinceStart.minutes} Minuten
                    </p>
                    <p class="Zeit">
                        {timeSinceStart.seconds} Sekunden
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Time;