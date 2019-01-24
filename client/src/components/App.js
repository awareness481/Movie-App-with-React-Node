import React, { Component } from 'react';
import logo from '../logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, () => {
      console.log(this.state.value);
    });
    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className='SearchForm'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.value} onChange={this.handleChange} name='search' />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
