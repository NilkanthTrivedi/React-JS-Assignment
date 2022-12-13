import React, { Component } from "react";

import "./Style.css";

export default class RegistrationPage extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row ">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="form-body">
                                <h1 className="text-center">Create Account</h1>
                                <label htmlFor="Name">First Name</label>
                                <br />
                                <input type="text" name="" id="Name" />
                                <br />
                                <label htmlFor="l-name">Last Name</label>
                                <br />
                                <input type="text" name="" id="l-name" />
                                <br />
                                <label htmlFor="Pwd">Password</label>
                                <br />
                                <input type="text" name="" id="Pwd" />
                                <br />
                                <label htmlFor="CPwd">Confirm Password</label>
                                <br />
                                <input type="text" name="" id="CPwd" />
                                <br />
                                <br />
                                <button className="btn-primary p-2">
                                    Create Now
                                </button>
                            </div>
                        </div>

                        <div className="col-3"></div>
                    </div>
                </div>
            </>
        );
    }
}
