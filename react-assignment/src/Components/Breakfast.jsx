import React, { Component } from "react";

import "./Style.css";

export default class Breakfast extends Component {
    render() {
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
                                        <li>Chhole Bhature</li>
                                        <hr />
                                        <li>Poha</li>
                                        <hr />
                                        <li>Meduwada-Sambhar</li>
                                        <hr />
                                        <li>Idli</li>
                                        <hr />
                                        <li>Sada Dosa</li>
                                        <hr />
                                        <li>Upma</li>
                                        <hr />
                                        <li>Thepla</li>
                                        <hr />
                                        <li>Tea</li>
                                        <hr />
                                        <li>Coffee</li>
                                        <hr />
                                        <li>Bornvita Milk</li>
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
                                        <li>&#8377; 100</li>
                                        <hr />
                                        <li>&#8377; 100</li>
                                        <hr />
                                        <li>&#8377; 120</li>
                                        <hr />
                                        <li>&#8377; 120</li>
                                        <hr />
                                        <li>&#8377; 60</li>
                                        <hr />
                                        <li>&#8377; 60</li>
                                        <hr />
                                        <li>&#8377; 60</li>
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
}
