import React, { Component } from 'react';
import UserInput from'./UserInput';
import UserOutput from './UserOutput'
import './App.css'



class App1 extends Component {
    state={
        name : '',
    }

    inputNameHandler=(event)=>{
        this.setState({name:event.target.value})}
    render() {
        return (
            <div className='App'>
                <UserInput inputName={this.inputNameHandler}/>
                <UserOutput outputName={this.state.name}/>
                <UserOutput outputName={this.state.name}/>
                <UserOutput outputName={this.state.name}/>
                
            </div>
        );
    }
}

export default App1;