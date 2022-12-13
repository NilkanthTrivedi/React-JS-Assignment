import React from "react";
import { useState } from "react";

export default function ClickToAdd() {
    const [Value, setValue] = useState(0);
    return (
        <>
            <div className="container">
                <h1>
                    {"You Have Clicked Button " + " " + Value + " " + " Times"}
                </h1>
                <button
                    onClick={() => {
                        setValue(Value + 1);
                    }}
                    className=" btn-lg"
                >
                    Click Me
                </button>
            </div>
        </>
    );
}
