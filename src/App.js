import React, {Component} from 'react';
import './App.css';
import Todo from './toDoList';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  } 

  inputChange = (event) => {
    this.setState({input: event.target.value})
  
  }
  formSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputChange}></input>
          <button>Submit</button>
        </form>
        <Todo items={this.state.items}/>
      </header>
    </div>
  );
  }
}

export default App;