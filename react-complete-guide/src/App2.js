import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
class App2 extends Component {
    state={
        userInput:''
    }

    inputChangedHandler=(event)=>{
        this.setState({userInput: event.target.value})
    }

    deleteChar=(index)=>{
        const text= this.state.userInput.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText})

    }

    render() {
        const charList = this.state.userInput.split('').map((ch,index)=>{
            return <Char 
                        charecter={ch} 
                        key={index}
                        clicked={()=>this.deleteChar(index)}/>
        })
        return (
            <div>
                <input type='text' 
                onChange={this.inputChangedHandler}
                value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation inputLenth ={this.state.userInput.length}/>
                {charList}
            </div>
        );
    }
}

export default App2;