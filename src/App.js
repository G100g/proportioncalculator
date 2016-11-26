import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

import { calc } from './utils.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      a: 100,
      b: 0,
      x: 4,
      y: 3,
      result: 'b'
    }
  }

  componentWillMount() {
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
          
          <Input name="a" value={this.state.a} result={this.state.result} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />

          <Input name="b" value={this.state.b} result={this.state.result} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />

          <Input name="x" value={this.state.x} result={this.state.result} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />

          <Input name="y" value={this.state.y} result={this.state.result} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />
          
        </div>
      </div>
    );
  }
}

export default App;
