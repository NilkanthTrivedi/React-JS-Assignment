import React, { Component } from "react";

export default class Questions extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center bg-info">
                                JS Questions And Answers
                            </h1>
                            <h5> (1) What is JavaScript Output method?</h5>
                            <p>
                                * JavaScript can "display" data in different
                                ways: Writing into an HTML element, using
                                innerHTML .
                            </p>
                            <br />
                            <h5>
                                (2) How do you write an output statement in
                                JavaScript?{" "}
                            </h5>
                            <p>
                                * JavaScript Output using document. write()
                                method. or we can target any element by its ID
                                and use innerHTMl, innerTEXT
                            </p>
                            <br />
                            <h5>
                                (3) How to used JavaScript Events to do all
                                examples?
                            </h5>
                            <p>
                                Several Examples Of The Events are as follows
                                <ul>
                                    <li>onBlur</li>
                                    <li>onClick</li>
                                    <li>onMouseenter</li>
                                    <li>onMouseleave</li>
                                    <li>onKeyup-down</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center bg-info">
                                React-JS Questions And Answers
                            </h1>

                            <h5>(1) What is React Js?</h5>
                            <p>
                                * The React-js framework is an open-source
                                JavaScript framework and library. It's used for
                                building interactive user interfaces and web
                                applications quickly and efficiently with
                                significantly less code than you would with
                                vanilla JavaScript.
                            </p>
                            <br />
                            <h5>(2) What is NPM in React Js?</h5>
                            <p>
                                * NPM is short for
                                <strong> node package manager</strong> , an
                                online directory that contains the various
                                already registered open-source packages. NPM
                                modules consume the various functions as a
                                third-party package when installed into an app
                                using the NPM command npm install .
                            </p>
                            <br />
                            <h5>(3) What is Role of Node Js in react Js?</h5>
                            <p>
                                * It is used for server-side programming, and
                                primarily deployed for non-blocking,
                                event-driven servers, such as traditional web
                                sites and back-end API services, but was
                                originally designed with real-time, push-based
                                architectures in mind. Every browser has its own
                                version of a JS engine, and node.
                            </p>
                            <br />
                            <h5>(4) What is CLI command In React Js?</h5>
                            <p>
                                * Create-react-app used to generate the
                                boilerplate version of a React application thru
                                command line
                            </p>
                            <br />
                            <h5>(5) What is Components in React Js?</h5>
                            <p>
                                * Components are independent and reusable bits
                                of code. They serve the same purpose as
                                JavaScript functions, but work in isolation and
                                return HTML. Components come in two types, Class
                                components and Function components
                            </p>
                            <br />
                            <h5>
                                (6) What is Header and Content Components in
                                React Js?
                            </h5>
                            <p>
                                * Headers are compositions that extend standard
                                navbar functionalities. They contain additional
                                components like a jumbotron, sub-navbar, or
                                image covers which serve as a containers for
                                extra navigation elements
                            </p>
                            <br />
                            <h5>
                                (7) How to install React Js on Windows, Linux
                                Operating System?
                            </h5>
                            <p>
                                <ol>
                                    <li>
                                        Open a terminal(Windows Command Prompt
                                        or PowerShell).
                                    </li>
                                    <li>
                                        Create a new project folder: mkdir
                                        ReactProjects and enter that directory:
                                        cd ReactProjects.
                                    </li>
                                    <li>
                                        Install React using create-react-app, a
                                        tool that installs all of the
                                        dependencies to build and run a full
                                        React.js application:{" "}
                                        <strong>
                                            npx create-react-app my-app
                                        </strong>
                                    </li>
                                    <li>
                                        Start your new React app:
                                        <b>npm start</b>
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <h5>
                                (8) How to install NPM and How to check version
                                of NPM?
                            </h5>
                            <p>
                                * The version of npm packages installed on your
                                computer can be found by running the npm list
                                command:<b> npm --version</b>
                            </p>
                            <br />
                            <h5>(9) How to check version of React Js?</h5>
                            <p>
                                * Open cmd and type 'react-native --v' or
                                'react-native --version'
                            </p>

                            <br />
                            <h5>
                                (10) How to change in components of React Js?
                            </h5>
                            <p>
                                * We have to set initial state value inside
                                constructor function and set click event handler
                                of the element upon which click, results in
                                changing state. Then pass the function to the
                                click handler and change the state of the
                                component inside the function using setState.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
