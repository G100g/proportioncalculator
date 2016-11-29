import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

import { calc } from './utils.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      a: 4,
      b: 3,
      x: 320,
      y: 0,
      result: 'y'
    }
  }

  componentWillMount() {
    this.updateResult();
  }

  onFieldChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value }, this.updateResult.bind(this));
  }

  onSetResult(e) {
    this.setResult(e.target.value);
  }

  setResult(fieldName) {
    this.setState({ result: fieldName }, this.updateResult.bind(this));
  }

  updateResult() {

    this.setState(calc(this.state));

  }

  checkSelected(fieldName) {
    return fieldName === this.state.result ? 'checked' : '';
  }

  render() {
    return (
      <main className="App">

        <header>
          <h1>Proportion Calculator</h1>
        </header>
        
        <div className="formContainer">
          
          <div className="formContainer__inputs">
            <Input name="a" value={this.state.a} result={this.state.result} onSelect={this.setResult.bind(this)} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />
            <hr />
            <Input name="b" value={this.state.b} result={this.state.result} onSelect={this.setResult.bind(this)} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />
          </div>

          <div className="formContainer__equal">
            <span>=</span>
          </div>

          <div className="formContainer__inputs">
            <Input name="x" value={this.state.x} result={this.state.result} onSelect={this.setResult.bind(this)} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />
            <hr />
            <Input name="y" value={this.state.y} result={this.state.result} onSelect={this.setResult.bind(this)} onSetResult={this.onSetResult.bind(this)} onChange={this.onFieldChange.bind(this)} />
          </div>
        </div>

        <footer>
          <p>made by g100g.net - Contribute - Donate</p>
        </footer>


      </main>
    );
  }
}

export default App;
