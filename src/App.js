import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Kronos", age: 28, profession: "Destroyer", id: "1" },
      { name: "Doe", age: 29, profession: "Artist", id: "2" },
      { name: "Dukes", age: 26, profession: "Just Dukes", id: "3" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  handleDelete = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };

  // handleChange = (event, id) => {
  //   const personIndex = this.state.persons.findIndex((p) => {
  //     return p.id === id;
  //   });

  //   const person = {
  //     ...this.state.persons[personIndex]
  //   }
  //   person.name = event.target.value

  //   const persons = [...this.state.persons]
  //   persons[personIndex] = persons

  //   this.setState({
  //     persons: persons
  //   })

  // };
  handleChange = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "#0E83FF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      font: "inherit",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                profession={person.profession}
                changed={(event) => this.handleChange(event, person.id)}
                click={() => this.handleDelete(index)}
              />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = "red";
      buttonStyle.border = "none";
    }

    let classStyle = [];
    if (this.state.persons.length <= 2) {
      classStyle.push("red");
    }

    if (this.state.persons.length <= 1) {
      classStyle.push("bold");
    }
   
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classStyle.join(" ")}>This is really working!</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
