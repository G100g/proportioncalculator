import React, { Component } from 'react';

import './Input.css';

class Input extends Component {

  render() {
    return (
      <div className="inputNumber">
        <input type="radio" name="result" value={this.props.name} checked={this.props.result === this.props.name} onChange={this.props.onSetResult} />
        <input type="number" value={this.props.value} onChange={this.props.onChange.bind(this, this.props.name)} />
      </div>
    )
  }
}

export default Input;