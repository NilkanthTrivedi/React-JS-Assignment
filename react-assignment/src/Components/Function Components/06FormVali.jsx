import React, { useState } from "react";

export default function FormVali() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [pwdErr, setPwdErr] = useState(false);
    // Form Function
    const LoginHandle = (e) => {
        if (user.length < 5 || password.length < 6) {
            alert("Type Correct values");
        } else {
        }
        e.preventDefault();
    };

    // Input Data Functions
    const userHandler = (e) => {
        let item = e.target.value;
        if (item.length <= 5) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUser(item);
    };

    const pwdHandler = (e) => {
        let item = e.target.value;
        if (item.length <= 5) {
            setPwdErr(true);
        } else {
            setPwdErr(false);
        }
        setPassword(item);
    };
    return (
        <>
            <div className="container my-5">
                <div className="Row ">
                    <div className="col">
                        <h2>Login Form</h2>
                        <form onSubmit={LoginHandle}>
                            <input
                                type="text"
                                name=""
                                id=""
                                onChange={userHandler}
                            />
                            {userErr ? <span>User Not Valid</span> : ""}
                            <br />
                            <br />
                            <input
                                type="password"
                                name=""
                                id=""
                                onChange={pwdHandler}
                            />
                            {pwdErr ? <span>Password Not Valid</span> : ""}
                            <br />
                            <br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
