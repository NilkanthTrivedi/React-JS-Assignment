import { useState } from "react";
import React from "react";
import { useLayoutEffect } from "react";

export default function DigitalClock() {
    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    // const UpdatedTime = () => {
    //     const now = new Date().toLocaleTimeString();
    //     setTime(now);
    //     console.log("first");
    // };

    useLayoutEffect(() => {
        setTimeout(() => {
            const now = new Date().toLocaleTimeString();
            setTime(now);
        }, 1000);
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>Time Is:</h2>
                        <h3>{time}</h3>
                        {/* <button onClick={UpdatedTime}>Right Time</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
