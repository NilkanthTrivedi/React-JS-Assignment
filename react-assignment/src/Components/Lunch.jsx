import React from "react";

import "./Style.css";

export default function Lunch() {
    return (
        <>
            <section id="breakfast">
                <div className="container-fluid menu">
                    <h1>
                        Break-Fast Menu <span> &#9728;</span>
                    </h1>
                    <div className="menu_card">
                        <div className="item">
                            <h3>
                                <ol>
                                    <li>Paw Bhaji</li>
                                    <hr />
                                    <li>Paneer chilli</li>
                                    <hr />
                                    <li>Paneer Butter-Masala</li>
                                    <hr />
                                    <li>Paneer Tuffani</li>
                                    <hr />
                                    <li>Paneer Lasanga</li>
                                    <hr />
                                    <li>Veg-Kolhapuri</li>
                                    <hr />
                                    <li>veg-Handi</li>
                                    <hr />
                                    <li>Garlic Naan</li>
                                    <hr />
                                    <li>Butter Naan</li>
                                    <hr />
                                    <li>Unlimited Lunch</li>
                                    <hr />
                                </ol>
                            </h3>
                        </div>
                        <div className="price">
                            <h3>
                                <ul>
                                    <li>&#8377; 70</li>
                                    <hr />
                                    <li>&#8377; 80</li>
                                    <hr />
                                    <li>&#8377; 100</li>
                                    <hr />
                                    <li>&#8377; 250</li>
                                    <hr />
                                    <li>&#8377; 250</li>
                                    <hr />
                                    <li>&#8377; 250</li>
                                    <hr />
                                    <li>&#8377; 250</li>
                                    <hr />
                                    <li>&#8377; 100</li>
                                    <hr />
                                    <li>&#8377; 100</li>
                                    <hr />
                                    <li>&#8377; 100</li>
                                    <hr />
                                </ul>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
