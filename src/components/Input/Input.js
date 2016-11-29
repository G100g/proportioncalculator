import React, { Component } from 'react';
import classNames from 'classnames';

import './Input.css';

class Input extends Component {

  render() {

    let checked = this.props.result === this.props.name;
    let disabled = checked;
    let classes = classNames(
      'inputNumber',
      {
        'inputNumber--selected': checked,
      }
    );

    return (
      <div className={classes} onDoubleClick={this.props.onSelect.bind(this, this.props.name)}>
        <input type="radio" name="result" value={this.props.name} checked={checked} onChange={this.props.onSetResult} />
        <input type="number" value={this.props.value} placeholder="0" onChange={this.props.onChange.bind(this, this.props.name)} disabled={disabled} />
      </div>
    )
  }
}

export default Input;