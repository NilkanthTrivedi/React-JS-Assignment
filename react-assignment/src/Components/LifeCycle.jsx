import React, { Component } from "react";

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor Called");
        this.state = {
            counter: 0,
        };
    }

    // componentWillMount() {
    //     console.log("componentWillMount Called");
    // }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("objshouldComponentUpdateect");
        console.log("Next Props", nextProps);
        console.log("Next State", nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log("prev Props", prevProps);
        console.log("prev State", prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    btnClick = () => {
        console.log("Here you clicked");
        this.setState({ counter: this.state.counter + 1 });
    };
    render() {
        console.log("Render Called");
        return (
            <>
                <h1>Life Cycle</h1>
                <br />
                <h2>{this.state.counter}</h2>
                <button onClick={this.btnClick}>Click Me</button>
            </>
        );
    }
}

export default LifeCycle;
