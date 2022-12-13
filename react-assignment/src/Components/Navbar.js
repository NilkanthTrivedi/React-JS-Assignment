import React from "react";

import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import LifeCycle from "./LifeCycle";
import RegistrationPage from "./01RegistrationPage";
import SubTotal from "./02SubTotal";
import ClickToAdd from "./03ClickToAdd";
import Questions from "./04Questions";
import DigitalClock from "./Function Components/05DigitalClock";
import FormVali from "./Function Components/06FormVali";
import StopWatchy from "./Function Components/07StopWatchy";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Navbar() {
    const Menues = {
        "/breakfast": "Breakfast",
        "/lunch": "Lunch",
        "/Dinner": "Dinner",
        "/LifeCycle": "LifeCycle",
        "/RegistrationPage": "RegistrationPage",
        "/02SubTotal": "SubTotal",
        "/ClickToAdd": "ClickToAdd",
        "/Questions": "Questions",
        "/DigitalClock": "DigitalClock",
        "/FormVali": "FormVali",
        "/StopWatchy": "StopWatchy",
    };

    const returnMenu = Object.entries(Menues).map((res, i) => {
        return (
            <li className="nav-item" key={i}>
                <Link
                    className="nav-link active"
                    aria-current="page"
                    to={res[0]}
                >
                    {res[1]}
                </Link>
            </li>
        );
    });
    return (
        <>
            {/* Navination Bar */}
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {returnMenu}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/Breakfast" element={<Breakfast />} />
                    <Route path="/Lunch" element={<Lunch />} />
                    <Route path="/Dinner" element={<Dinner />} />
                    <Route path="/LifeCycle" element={<LifeCycle />} />
                    <Route
                        path="/RegistrationPage"
                        element={<RegistrationPage />}
                    />
                    <Route path="/02SubTotal" element={<SubTotal />} />
                    <Route path="/ClickToAdd" element={<ClickToAdd />} />
                    <Route path="/Questions" element={<Questions />} />
                    <Route path="/DigitalClock" element={<DigitalClock />} />
                    <Route path="/FormVali" element={<FormVali />} />
                    <Route path="/StopWatchy" element={<StopWatchy />} />
                </Routes>
            </Router>
        </>
    );
}
