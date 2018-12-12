import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }

    sum(x) {
        this.setState({ value: this.state.value + x });
    }

    les(x) {
        this.setState({ value: this.state.value - x });
    }

    render() {

        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(1)}>+</button>
                <button onClick={() => this.les(1)}>-</button>
            </div>
        );
    }
}