import React, { Component } from "react";
import "./styles.css";

import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Mich", age: 32 },
      { name: "Gilles", age: 1 },
      { name: "Anneleen", age: 27 }
    ]
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Mich", age: 31 },
        { name: "Gilles", age: 1 },
        { name: event.target.value, age: 27 }
      ]
    });
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Gilles", age: 1 },
        { name: "Anneleen", age: 27 }
      ]
    });
  };
  render() {
    const style = {
      font: "inherit"
    };
    return (
      <div className="App">
        <h1>Header </h1>
        <p>working</p>
        <button style={style} onClick={() => this.switchNameHandler("Michael")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Mich!")}
          changed={this.nameChangedHandler}
        >
          I like crying
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
export default App;
