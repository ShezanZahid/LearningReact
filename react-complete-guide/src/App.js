import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Max', age: 31 },
      { id:2,name: 'Manu', age: 28 },
      { id:3,name: 'Ana', age: 22 },
      { id:4,name: 'Luna', age: 18 }

    ],
    otherState: 'New Test',
    showPersons: false
  }

  

  nameChnagedHandler = (id,event) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id;
    })

    const person = { ...this.state.persons[personIndex]}
    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] =person;

    this.setState({ persons:persons  })
  }

  togglePersonsName = () => {

    let showPersonToggle = this.state.showPersons;
    this.setState({
      showPersons: !showPersonToggle
    })
  }

  deletePersonHandler=(personIndex)=>{
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
 
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return (
              <Person
                key={person.id}
                click ={this.deletePersonHandler.bind(this,index)}
                name={person.name}
                age={person.age} 
                changed={(event)=>this.nameChnagedHandler(person.id,event)}/>
            )
          })}

        </div>
      )
      style.backgroundColor='red'
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    }

    let classes = []
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Lets Learn React</h1>
        <p className={classes.join(' ')}>GOOD JOB!!!!  Lets start the Journy. </p>
        <button
          style={style}
          onClick={this.togglePersonsName}>
          Switch Name
            </button>
        {persons}
      </div>

    );
  }
}

export default Radium(App);
