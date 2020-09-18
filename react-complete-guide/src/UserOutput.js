import React from 'react';
import './UserOutput.css'

const userInput=(props)=>{
    return  <div className='UserOutput'>
                <p>UserName: {props.outputName}</p>  
            </div>
    
}

export default userInput;