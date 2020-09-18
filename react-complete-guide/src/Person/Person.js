import React from 'react'
import './Person.css'
import Radium, {StyleRoot} from 'radium'

const person = (props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450'
        }
    }


return (
    <StyleRoot>
        <div className='Person'>
            <p onClick={props.click}>I am learning New things.
            My name is {props.name} and 
            my age is {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>{props.children}</p>
        </div>
    </StyleRoot>
        )
}

export default Radium(person)