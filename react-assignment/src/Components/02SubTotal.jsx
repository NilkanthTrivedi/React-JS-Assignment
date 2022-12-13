import React, { Component } from "react";

import "./Style.css";

export default class SubTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teaPrice: "",
            coffeePrice: "",
            espPrice: "",
        };
    }
    teaTotal = () => {
        var q = document.getElementById("tea").value;
        this.setState({ teaPrice: 100 * q });
    };

    coffeeTotal = () => {
        var p = document.getElementById("coffee").value;
        this.setState({ coffeePrice: 80 * p });
    };

    espTotal = () => {
        var r = document.getElementById("esp").value;
        this.setState({ espPrice: 120 * r });
        console.log(this.setState.espPrice);
    };

    render() {
        console.log(this.state);
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Tea</td>
                            <td>
                                <input type="number" name="" id="tea" />
                            </td>
                            <td>100/-</td>
                            <td>
                                <span id="total">{this.state.teaPrice}</span>
                            </td>
                            <td>
                                <button
                                    onClick={this.teaTotal}
                                    className="btn-sm"
                                >
                                    Check
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Cold Coffee</td>
                            <td>
                                <input type="number" name="" id="coffee" />
                            </td>
                            <td>80/-</td>
                            <td>
                                <span id="total">{this.state.coffeePrice}</span>
                            </td>
                            <td>
                                <button
                                    className="btn-sm"
                                    onClick={this.coffeeTotal}
                                >
                                    Check
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Espresso</td>
                            <td>
                                <input type="number" name="" id="esp" />
                            </td>
                            <td>120/-</td>
                            <td>
                                <span id="total">{this.state.espPrice}</span>
                            </td>
                            <td>
                                <button
                                    className="btn-sm"
                                    onClick={this.espTotal}
                                >
                                    Check
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Bill Total</th>
                            <td colSpan={2}>:-</td>
                            <td colSpan={2}>
                                <span id="bill"></span>
                            </td>
                            <td>
                                <button className="btn-lg btn-primary">
                                    Total
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}
