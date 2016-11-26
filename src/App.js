import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { calc } from './utils.js';

class Input extends Component {

  render() {
    return (
      <div>
        <input type="radio" value="a" onChange={this.onSetResult.bind(this)} />
        <input type="number" value={this.state.a} onChange={this.onFieldChange.bind(this, 'a')} />
      </div>
    )
  }
}


class App extends Component {

  componentWillMount() {

    this.state = {
      a: 100,
      b: 0,
      x: 4,
      y: 3,
      result: 'b'
    }

    this.updateResult();
  }

  onFieldChange(fieldName, e) {
    this.setState(Object.assign({}, this.state, { [fieldName]: e.target.value }), this.updateResult.bind(this));
  }

  onSetResult(e) {
    this.setState(Object.assign({}, this.state, { result: e.target.value }), this.updateResult.bind(this));
  }

  updateResult() {

    this.setState(Object.assign({}, this.state, calc(this.state) ));

  }

  checkSelected(fieldName) {

    console.log(fieldName === this.state.result);

    return fieldName === this.state.result ? 'checked' : '';
  }

  render() {
    return (
      <div className="App">
        
        <div className="formContainer">
          
          <div>
            <input type="radio" name="result" value="a" checked={this.state.result === 'a'} onChange={this.onSetResult.bind(this)} />
            <input type="number" value={this.state.a} onChange={this.onFieldChange.bind(this, 'a')} />
          </div>

          <div>
            <input type="radio" name="result" value="b" checked={this.state.result === 'b'} onChange={this.onSetResult.bind(this)} />
            <input type="number" value={this.state.b} onChange={this.onFieldChange.bind(this, 'b')} />
          </div>

          <div>
            <input type="radio" name="result" value="x" checked={this.state.result === 'x'} onChange={this.onSetResult.bind(this)} />
            <input type="number" value={this.state.x} onChange={this.onFieldChange.bind(this, 'x')} />
          </div>

          <div>
            <input type="radio" name="result" value="y" checked={this.state.result === 'y'} onChange={this.onSetResult.bind(this)} />
            <input type="number" value={this.state.y} onChange={this.onFieldChange.bind(this, 'y')} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
