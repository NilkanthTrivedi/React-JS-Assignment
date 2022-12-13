import React from "react";
import { useState } from "react";

export default function StopWatchy() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        play();
        setInterv(setInterval(play, 10));
        setStatus(1);
    };

    var updatedMs = time.ms;
    var updatedS = time.s;
    var updatedM = time.m;
    var updatedH = time.h;

    const play = () => {
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        updatedMs++;
        return setTime({
            ms: updatedMs,
            s: updatedS,
            m: updatedM,
            h: updatedH,
        });
    };

    const Stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const Reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    };

    const Resume = () => {
        start();
    };

    return (
        <>
            <div className="container">
                <div className="row text-center my-5">
                    <div className="col">
                        <h2>
                            <span className="badge bg-secondary me-1">
                                {time.h}
                            </span>
                            :
                            <span className="badge bg-secondary me-1">
                                {time.m}
                            </span>
                            :
                            <span className="badge bg-secondary me-1">
                                {time.s}
                            </span>
                            :
                            <span className="badge bg-secondary">
                                {time.ms}
                            </span>
                        </h2>
                    </div>
                    <div className="my-5">
                        {/* Start Button */}
                        {status === 0 ? (
                            <button className="btn btn-primary" onClick={start}>
                                Start
                            </button>
                        ) : (
                            ""
                        )}

                        {/* Stop & Reset Button */}

                        {status === 1 ? (
                            <div>
                                <button
                                    className="btn btn-success me-2"
                                    onClick={Stop}
                                >
                                    Pause
                                </button>
                                <button
                                    className="btn btn-warning"
                                    onClick={Reset}
                                >
                                    Reset
                                </button>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* Resume & Reset Button */}

                        {status === 2 ? (
                            <div>
                                <button
                                    className="btn btn-info me-2"
                                    onClick={Resume}
                                >
                                    Resume
                                </button>
                                <button
                                    className="btn btn-warning"
                                    onClick={Reset}
                                >
                                    Reset
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
