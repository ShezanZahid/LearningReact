import React from 'react';

const userInput=(props)=>{
    const style = {
        margin: '10px',
        border: '2px solid red'
    }
    return  <div>
                <input 
                    type='text' 
                    style={style}
                    onChange={props.inputName}>
                </input>    
            </div>
    
}

export default userInput;