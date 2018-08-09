import React, { Component } from "react";
import "./styles.css";

import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Mich", age: 32 },
      { name: "Gilles", age: 1 },
      { name: "Anneleen", age: 27 }
    ],
    showPersons: false
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

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      font: "inherit"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Header </h1>
        <p>working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          switch tiles
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
