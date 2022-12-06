import React from "react";
import "./Style.css";

export default function Dinner() {
    return (
        <>
            <section id="breakfast">
                <div className="container-fluid menu">
                    <h1>
                        Dinner Menu <span> 🌕</span>
                    </h1>
                    <div className="menu_card">
                        <div className="item">
                            <h3>
                                <ol>
                                    <li>Veg Manchow Soup &#9832;</li>
                                    <hr />
                                    <li>Paneer Tikka</li>
                                    <hr />
                                    <li>Munchurian Dry</li>
                                    <hr />
                                    <li>Paneer Tuffani</li>
                                    <hr />
                                    <li>Paneer Dragon</li>
                                    <hr />
                                    <li>Schezwan Rice</li>
                                    <hr />
                                    <li>Tripple Rice</li>
                                    <hr />
                                    <li>Garlic Naan</li>
                                    <hr />
                                    <li>Butter Naan</li>
                                    <hr />
                                    <li>Hot Beverages &#9749;</li>
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
